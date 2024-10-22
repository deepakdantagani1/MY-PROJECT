const getCompletion  = require("./getcompletion");

const text = `
You should express what you want a model to do by 
providing instructions that are as clear and 
specific as you can possibly make them. 
This will guide the model towards the desired output, 
and reduce the chances of receiving irrelevant 
or incorrect responses. Don't confuse writing a 
clear prompt with writing a short prompt. 
In many cases, longer prompts provide more clarity 
and context for the model, which can lead to 
more detailed and relevant outputs.
`;

const prompt = `
Summarize the text delimited by triple backticks 
into a single sentence.
\`\`\`${text}\`\`\`
`;

// Make the completion call and print the response
getCompletion(prompt)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error('Error:', error);
    });