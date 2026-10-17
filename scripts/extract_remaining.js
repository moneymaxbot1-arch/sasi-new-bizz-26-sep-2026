import { GoogleGenAI } from '@google/genai';
import fs from 'fs';

const currentData = JSON.parse(fs.readFileSync('src/data/extractedPitchers.json', 'utf8'));
const ai = new GoogleGenAI();

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function extractItem(item) {
  console.log(`Starting extraction for #${item.id}...`);
  let attempts = 0;
  while (attempts < 5) {
    attempts++;
    try {
      const res = await fetch(item.imageUrl);
      const arrayBuffer = await res.arrayBuffer();
      const base64 = Buffer.from(arrayBuffer).toString('base64');

      const prompt = `Read the text on this infographic slide:
1. mainTitle: The prominent industry/business title at top (e.g. "DRIVING SCHOOLS & LICENSING ACADEMIES", "HOME SERVICES & CONTRACTORS")
2. category: Sub-industry tag in parenthesis or natural category
3. objective: The text under the title starting with "Primary Objective:" or "Solving:"
4. flowSummary: A concise 1-2 sentence description combining the objective and the 4 numbered workflow steps.
5. highlightMetric: A key number or rate mentioned in the slide (e.g. "4.8x", "99.4%", "84%", etc.) or "6-Tool"
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
      return true;
    } catch (err) {
      console.warn(`Attempt ${attempts} failed for #${item.id}: ${err.message}. Retrying in 18s...`);
      await sleep(18000);
    }
  }
  return false;
}

async function main() {
  for (let i = 0; i < currentData.length; i++) {
    const item = currentData[i];
    if (item.title.startsWith('Industry Blueprint')) {
      const ok = await extractItem(item);
      if (ok) {
        fs.writeFileSync('src/data/extractedPitchers.json', JSON.stringify(currentData, null, 2));
      }
      console.log('Sleeping 14s before next item...');
      await sleep(14000);
    }
  }
  console.log('🎉 ALL PENDING ITEMS FINISHED!');
}

main();
