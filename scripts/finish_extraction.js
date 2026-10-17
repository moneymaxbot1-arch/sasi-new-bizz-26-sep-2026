import { GoogleGenAI } from '@google/genai';
import fs from 'fs';

const currentData = JSON.parse(fs.readFileSync('src/data/extractedPitchers.json', 'utf8'));
const ai = new GoogleGenAI();

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function extractOne(item) {
  console.log(`Extracting #${item.id}...`);
  try {
    const res = await fetch(item.imageUrl);
    const arrayBuffer = await res.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString('base64');

    const prompt = `Read the text on this infographic slide:
1. mainTitle: The prominent industry/business title at top (e.g. "DRIVING SCHOOLS & LICENSING ACADEMIES", "AUTOMOBILE DEALERSHIPS & WORKSHOPS", "PET CARE, GROOMING & VETERINARY CLINICS")
2. category: Sub-industry tag or natural category (e.g. "Automotive Services", "Health & Wellness")
3. objective: The text under the title starting with "Primary Objective:" or "Solving:"
4. flowSummary: A concise 1-2 sentence description combining the objective and the 4 numbered workflow steps.
5. highlightMetric: A key number or rate mentioned in the slide (e.g. "4.8x", "99.4%", "84%", etc.) or "6-in-1"
6. metricLabel: Label for the highlightMetric

Return strictly a JSON object with: { "mainTitle": "...", "category": "...", "objective": "...", "flowSummary": "...", "highlightMetric": "...", "metricLabel": "..." }`;

    const modelRes = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: [
        {
          inlineData: {
            data: base64,
            mimeType: 'image/jpeg'
          }
        },
        prompt
      ],
      config: { responseMimeType: 'application/json' }
    });

    const parsed = JSON.parse(modelRes.text);
    item.title = parsed.mainTitle || item.title;
    item.category = parsed.category || item.category;
    item.tagline = parsed.objective ? parsed.objective.slice(0, 60) : `The 6-Tool Workflow #${item.id}`;
    item.description = parsed.objective 
      ? `${parsed.objective}. ${parsed.flowSummary || ''}`.trim()
      : (parsed.flowSummary || item.description);
    item.stat = parsed.highlightMetric || '6-Tool';
    item.statLabel = parsed.metricLabel || 'Workflow Blueprint';
    console.log(`✅ Success for #${item.id}: ${item.title}`);
  } catch (err) {
    console.error(`❌ Error on #${item.id}:`, err.message);
  }
}

async function main() {
  for (let i = 0; i < currentData.length; i++) {
    const item = currentData[i];
    if (item.title.startsWith('Industry Blueprint')) {
      await extractOne(item);
      fs.writeFileSync('src/data/extractedPitchers.json', JSON.stringify(currentData, null, 2));
      // Wait 13 seconds to strictly respect the 5 RPM rate limit
      console.log('Sleeping 13s for rate limit...');
      await sleep(13000);
    }
  }
  console.log('🎉 ALL 36 EXTRACTIONS FINISHED!');
}

main();
