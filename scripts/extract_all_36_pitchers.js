import { GoogleGenAI } from '@google/genai';
import fs from 'fs';

const PITCHER_URLS = [
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/1.%20Gemini_Generated_Image_56if356if356if35.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/2.%20Gemini_Generated_Image_50jcdk50jcdk50jc.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/3.%20Gemini_Generated_Image_kxldrzkxldrzkxld.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/4.%20Gemini_Generated_Image_ksjea9ksjea9ksje.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/5.%20Gemini_Generated_Image_ga6yrqga6yrqga6y.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/6.%20Gemini_Generated_Image_ae3fiuae3fiuae3f.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/7.%20Gemini_Generated_Image_ps4tj5ps4tj5ps4t.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/8.%20Gemini_Generated_Image_uzj97muzj97muzj9.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/9.%20Gemini_Generated_Image_wk8yh9wk8yh9wk8y.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/10.%20Gemini_Generated_Image_5ar3g95ar3g95ar3(1).jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/11.%20Gemini_Generated_Image_6icksm6icksm6ick.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/12.%20Gemini_Generated_Image_6qg2586qg2586qg2.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/13.%20Gemini_Generated_Image_8tjtvc8tjtvc8tjt.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/14.%20Gemini_Generated_Image_9yiis59yiis59yii.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/15.%20Gemini_Generated_Image_32smt932smt932sm.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/16.%20Gemini_Generated_Image_185tu4185tu4185t.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/17.%20Gemini_Generated_Image_fmt5bhfmt5bhfmt5.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/18.%20Gemini_Generated_Image_cuf6escuf6escuf6.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/19.%20Gemini_Generated_Image_q2wee7q2wee7q2we.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/2.%20Gemini_Generated_Image_50jcdk50jcdk50jc.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/3.%20Gemini_Generated_Image_kxldrzkxldrzkxld.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/4.%20Gemini_Generated_Image_ksjea9ksjea9ksje.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/5.%20Gemini_Generated_Image_ga6yrqga6yrqga6y.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/6.%20Gemini_Generated_Image_ae3fiuae3fiuae3f.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/7.%20Gemini_Generated_Image_ps4tj5ps4tj5ps4t.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/8.%20Gemini_Generated_Image_uzj97muzj97muzj9.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/9.%20Gemini_Generated_Image_wk8yh9wk8yh9wk8y.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/Gemini_Generated_Image_4zr62k4zr62k4zr6.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/Gemini_Generated_Image_brix93brix93brix.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/Gemini_Generated_Image_g8dr6fg8dr6fg8dr.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/Gemini_Generated_Image_msvz7imsvz7imsvz.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/Gemini_Generated_Image_osmoblosmoblosmo.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/Gemini_Generated_Image_paafkkpaafkkpaaf.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/Gemini_Generated_Image_rrokbhrrokbhrrok.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/Gemini_Generated_Image_sn0ljysn0ljysn0l.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/Gemini_Generated_Image_stvakustvakustva(1).jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/Gemini_Generated_Image_stvakustvakustva.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/Gemini_Generated_Image_tcedyktcedyktced.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/Gemini_Generated_Image_u5bnyiu5bnyiu5bn.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/Gemini_Generated_Image_ux44i8ux44i8ux44.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/Gemini_Generated_Image_v781d5v781d5v781.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/Gemini_Generated_Image_wm2lbhwm2lbhwm2l.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/Gemini_Generated_Image_ycscd3ycscd3ycsc.jpg',
  'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/industry%20Automation%20pitcher%20(17%20oct%202026)/Gemini_Generated_Image_z4wkc3z4wkc3z4wk.jpg'
];

// Note: Ensure distinct list of 36 unique URLs from the user's list
const UNIQUE_URLS = Array.from(new Set(PITCHER_URLS));
console.log(`Processing ${UNIQUE_URLS.length} unique URLs...`);

const ai = new GoogleGenAI();

async function processImage(url, index) {
  try {
    const res = await fetch(url);
    const arrayBuffer = await res.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString('base64');

    const prompt = `Read the text on this infographic slide:
1. mainTitle: The prominent industry/business title at top (e.g. "DRIVING SCHOOLS & LICENSING ACADEMIES", "B2B CORPORATE SERVICES")
2. category: Sub-industry tag in parenthesis or natural category (e.g. "Accounting / Legal / CoSec" or "Driving Academy")
3. objective: The text under the title starting with "Primary Objective:" or "Solving:"
4. flowSummary: A concise 1-2 sentence description combining the objective and the 4 numbered workflow steps.
5. highlightMetric: A key number or rate mentioned in the slide (e.g. "4.8x", "99.4%", "84%", etc.) or "6-in-1"
6. metricLabel: Label for the highlightMetric (e.g. "Pass Rate", "Automated Flow", "Proposal Response")

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
    return {
      id: index + 1,
      title: parsed.mainTitle || `Industry Automation Blueprint #${index + 1}`,
      category: parsed.category || 'Business Automation',
      tagline: parsed.objective ? parsed.objective.slice(0, 50) : `The 6-Tool Workflow #${index + 1}`,
      description: parsed.objective 
        ? `${parsed.objective}. ${parsed.flowSummary || ''}`.trim()
        : (parsed.flowSummary || 'Automated multi-tool workflow pipeline.'),
      imageUrl: url,
      stat: parsed.highlightMetric || '6-in-1',
      statLabel: parsed.metricLabel || 'Integrated Tools'
    };
  } catch (err) {
    console.error(`Error processing image ${index + 1}:`, err.message);
    return {
      id: index + 1,
      title: `Industry Blueprint #${index + 1}`,
      category: 'Industry Automation',
      description: 'The 6-tool integrated automation workflow.',
      imageUrl: url
    };
  }
}

async function run() {
  const results = [];
  // Process in batches of 4 to be fast and respectful of concurrency
  for (let i = 0; i < UNIQUE_URLS.length; i += 4) {
    const chunk = UNIQUE_URLS.slice(i, i + 4);
    const chunkPromises = chunk.map((url, idx) => processImage(url, i + idx));
    const chunkResults = await Promise.all(chunkPromises);
    results.push(...chunkResults);
    console.log(`Processed ${results.length} / ${UNIQUE_URLS.length}`);
  }

  fs.writeFileSync('src/data/extractedPitchers.json', JSON.stringify(results, null, 2));
  console.log('✅ Extraction complete! Saved to src/data/extractedPitchers.json');
}

run();
