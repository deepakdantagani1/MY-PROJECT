const getCompletion = require("../getcompletion");
const fs = require("fs").promises;

async function splitText(text, maxCharsPerChunk) {
  const paragraphs = text.split("\n\n");
  let chunks = [];
  let currentChunk = "";

  for (const paragraph of paragraphs) {
    // Split the paragraph into sentences or smaller parts if necessary
    const sentences = paragraph.match(/[^\.!\?]+[\.!\?]+/g) || [paragraph];

    for (const sentence of sentences) {
      if (currentChunk.length + sentence.length > maxCharsPerChunk) {
        // If adding the sentence exceeds the max character count, push the current chunk
        chunks.push(currentChunk.trim());
        currentChunk = "";
      }
      currentChunk += sentence + " ";
    }

    // Add a break between paragraphs
    if (currentChunk.length > 0) {
      currentChunk += "\n\n";
    }
  }

  // Push the last chunk if it's not empty
  if (currentChunk.trim().length > 0) {
    chunks.push(currentChunk.trim());
  }

  return chunks;
}



async function analyzeReviewChunk(chunk) {
  const prompt = `
Analyze Airbnb comments to determine guest priorities when staying in a house. 
Output results as a ranked list considering frequency and sentiment. Follow these steps:

1) Preprocess: Clean comments - remove usernames, dates, punctuation. Convert to lowercase and omit stopwords (e.g., "the," "and").
2) Tokenize: Break comments into words or tokens.
3) Frequency Analysis: Count token occurrences to identify common topics
4) Sentiment Analysis: Assess comment sentiment. Positive indicates importance; negative suggests improvement areas.
5) Ranking: Based on frequency and sentiment, and importance.

\`\`\`${chunk}\`\`\`
`;

  return await getCompletion(prompt);
}

async function airbnbReviewAnalysis() {
  try {
    const reviewsFilePath =
      "/Users/deepak.dantagani/MyProjects/Promt-Engineering/4-Airbnb/4-review.txt";
      const outputFilePath = '/Users/deepak.dantagani/MyProjects/Promt-Engineering/4-Airbnb/4-review-report.txt';
    const textReviews = await fs.readFile(reviewsFilePath, "utf8");
    const chunks = await splitText(textReviews, 3500); // Adjust the chunk size to be significantly lower.

    let aggregatedResults = [];

    for (let i = 0; i < chunks.length; i++) {
      console.log(`Processing chunk ${i + 1} of ${chunks.length}`);
      const result = await analyzeReviewChunk(chunks[i]);
      aggregatedResults.push(result);
    }

    // Aggregate and print results
    // Depending on the nature of the results, you might need a more sophisticated way to aggregate.
    await fs.writeFile(outputFilePath, aggregatedResults);
  } catch (error) {
    console.error("Error:", error);
  }
}



// Other functions (splitText, analyzeReviewChunk, updateAggregatedResults, generateFinalReport) go here

airbnbReviewAnalysis();
