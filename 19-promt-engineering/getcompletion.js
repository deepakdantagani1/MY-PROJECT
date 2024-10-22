const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: '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'
});

async function getCompletion(prompt, model = "gpt-3.5-turbo") {
  const messages = [{ role: "user", content: prompt }];

  try {
    const response = await openai.chat.completions.create({
      model: model,
      messages: messages,
      temperature: 0, 
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error with OpenAI call:", error);
    throw error; 
  }
}

module.exports = getCompletion;
