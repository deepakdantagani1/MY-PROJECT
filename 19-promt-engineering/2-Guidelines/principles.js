const getCompletion = require("../getcompletion");

/**

/**
 * ==> clear instructions
 * Tactic 1: Use delimiters to clearly indicate distinct parts of the input: Delimiters can be anything like: ```, """, < >, <tag> </tag>, :
 * Tactic 2: Ask for a structured output
 * Tactic 3: Ask the model to check whether conditions are satisfied
 * Tactic 4: "Few-shot" prompting
 */

/**
 * ==> give model time to think
 * Tactic 1: Specify the steps required to complete a task
 * Tactic 2: Instruct the model to work out its own solution before rushing to a conclusion
 */

/**
 * ==> model limitations
 * Hallucinations
 *
 */

// * Tactic 1: Use delimiters to clearly indicate distinct parts of the input: Delimiters can be anything
// like: ```, """, < >, <tag> </tag>, :
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

getCompletion(prompt)
  .then((response) => {
    console.log(`response1: ${response}`);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

/**
 * output:
 * To guide a model towards the desired output and avoid irrelevant or incorrect responses,
 * it is important to provide clear and specific instructions, which may be better achieved through longer prompts
 * that offer more clarity and context.
 */

//Tactic 2: Ask for a structured output
const prompt1 = `
    Generate a list of three made-up book titles along 
    with their authors and genres. 
    Provide them in JSON format with the following keys: 
    book_id, title, author, genre.
    `;

getCompletion(prompt1)
  .then((response) => {
    console.log(`response2: ${response}`);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

/**
 * response2: [
    {
        "book_id": 1,
        "title": "The Enigma of Elysium",
        "author": "Aria Nightshade",
        "genre": "Fantasy"
    },
    {
        "book_id": 2,
        "title": "Whispers in the Shadows",
        "author": "Elijah Blackwood",
        "genre": "Mystery"
    },
    {
        "book_id": 3,
        "title": "Stardust Chronicles",
        "author": "Luna Silvermoon",
        "genre": "Science Fiction"
    }
]
 */

// Tactic 3: Ask the model to check whether conditions are satisfied
const text3 = `
Making a cup of tea is easy! First, you need to get some 
water boiling. While that's happening, 
grab a cup and put a tea bag in it. Once the water is 
hot enough, just pour it over the tea bag. 
Let it sit for a bit so the tea can steep. After a 
few minutes, take out the tea bag. If you 
like, you can add some sugar or milk to taste. 
And that's it! You've got yourself a delicious 
cup of tea to enjoy.
`;

const prompt3 = `
You will be provided with text delimited by triple quotes. 
If it contains a sequence of instructions, 
re-write those instructions in the following format:

Step 1 - ...
Step 2 - …
…
Step N - …

If the text does not contain a sequence of instructions, 
then simply write "No steps provided."

"""${text3}"""
`;

getCompletion(prompt3)
  .then((response) => {
    console.log("Completion for Text 1:");
    console.log(`response3: ${response}`);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

/**
 * response3: Step 1 - Get some water boiling.
Step 2 - Grab a cup and put a tea bag in it.
Step 3 - Pour the hot water over the tea bag.
Step 4 - Let the tea steep for a few minutes.
Step 5 - Take out the tea bag.
Step 6 - Add sugar or milk to taste.
Step 7 - Enjoy your delicious cup of tea.
  */

// Tactic 4: "Few-shot" prompting
const prompt4 = `
Your task is to answer in a consistent style.

<child>: Teach me about patience.

<grandparent>: The river that carves the deepest 
valley flows from a modest spring; the 
grandest symphony originates from a single note; 
the most intricate tapestry begins with a solitary thread.

<child>: Teach me about resilience.
`;

// Make the completion call and print the response
getCompletion(prompt4)
  .then((response) => {
    console.log(`response4: ${response}`);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

/**
 * response4: <grandparent>: Resilience is the unwavering strength that emerges from facing adversity. 
 * It is the ability to bounce back, to rise above challenges, and to persevere in the face of obstacles. 
 * Just as a tree bends but does not break in a storm, resilience allows us to weather the storms of life and come out 
 * stronger on the other side.
 */

//Tactic 1: Specify the steps required to complete a task
const text5 = `
    In a charming village, siblings Jack and Jill set out on 
    a quest to fetch water from a hilltop 
    well. As they climbed, singing joyfully, misfortune 
    struck—Jack tripped on a stone and tumbled 
    down the hill, with Jill following suit. 
    Though slightly battered, the pair returned home to 
    comforting embraces. Despite the mishap, 
    their adventurous spirits remained undimmed, and they 
    continued exploring with delight.
    `;

const prompt5 = `
    Perform the following actions: 
    1 - Summarize the following text delimited by triple backticks with 1 sentence.
    2 - Translate the summary into French.
    3 - List each name in the French summary.
    4 - Output a json object that contains the following keys: french_summary, num_names.
    
    Separate your answers with line breaks.
    
    Text:
    """${text5}"""
    `;

// Make the completion call and print the response
getCompletion(prompt5)
  .then((response) => {
    console.log("Completion for prompt 1:");
    console.log(`response5: ${response}`);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

/**
 * response5: 1. Jack and Jill went up the hill to fetch a pail of water.
 * 2. Jack et Jill sont allés à la colline pour chercher un seau d'eau.
 * 3. Jack et Jill
 * 4. {
    "french_summary": "Jack et Jill sont allés à la colline pour chercher un seau d'eau.",
    "num_names": 2
}
 */

// Tactic 2: Instruct the model to work out its own solution before rushing to a conclusion
const prompt6 = `
Your task is to determine if the student's solution is correct or not.
To solve the problem do the following:
- First, work out your own solution to the problem. 
- Then compare your solution to the student's solution 
and evaluate if the student's solution is correct or not. 
Don't decide if the student's solution is correct until 
you have done the problem yourself.

Use the following format:
Question:
\\\`
question here
\\\`
Student's solution:
\\\`
student's solution here
\\\`
Actual solution:
\\\`
steps to work out the solution and your solution here
\\\`
Is the student's solution the same as actual solution just calculated:
\\\`
yes or no
\\\`
Student grade:
\\\`
correct or incorrect
\\\`

Question:
\\\`
I'm building a solar power installation and I need help 
working out the financials. 
- Land costs $100 / square foot
- I can buy solar panels for $250 / square foot
- I negotiated a contract for maintenance that will cost 
me a flat $100k per year, and an additional $10 / square 
foot
What is the total cost for the first year of operations 
as a function of the number of square feet.
\\\` 
Student's solution:
\\\`
Let x be the size of the installation in square feet.
Costs:
1. Land cost: 100x
2. Solar panel cost: 250x
3. Maintenance cost: 100,000 + 100x
Total cost: 100x + 250x + 100,000 + 100x = 450x + 100,000
\\\`
Actual solution:
`;

// Make the completion call and print the response
getCompletion(prompt6)
  .then((response) => {
    console.log(`response6: ${response}`);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

/**
 * response6: \`
Let x be the size of the installation in square feet.
Costs:
1. Land cost: $100 * x = $100x
2. Solar panel cost: $250 * x = $250x
3. Maintenance cost: $100,000 + $10 * x = $100,000 + $10x
Total cost: $100x + $250x + $100,000 + $10x = $360x + $100,000
\`
Is the student's solution the same as actual solution just calculated:
\`
No
\`
Student grade:
\`
Incorrect
\`
  */
