/**
 * Summary:
 * knowledge base, question answering VS language understanding, present specific information, Azure AI Search resource to host the knowledge base index
 * 
 *  Azure AI services  ==> Language Service ==> Azure AI Search resource to host the knowledge base index 
 * ==> Language Studio, select your Azure AI Language resource and create a Custom question answering project
 * 
 * Test the knowledge base in Language Studio
 * 
 * top, scoreThreshold, strictFilters
 * 
 * active learning, Review suggestions, define synonyms
 */

/**
 * Learning objectives
 * After completing this module, you will be able to:
 * 
 * ==> Understand question answering and how it compares to language understanding.
 * Create, test, publish, and consume a knowledge base.
 * Implement multi-turn conversation and active learning.
 * Create a question answering bot to interact with using natural language.
 */

/**
 * Understand question answering
 * ==> Azure AI Language includes a question answering capability, which enables you to define a 
 * knowledge base of question and answer pairs that can be queried using natural language input. 
 * The knowledge base can be published to a REST endpoint and consumed by client applications, commonly bots.
 */

/**
 * Compare question answering to Azure AI Language understanding
 * Feature/Aspect            | Question Answering (QA)                                     | Language Understanding (LU)
--------------------------|-------------------------------------------------------------|-----------------------------------------------------------
Definition                | Provides specific answers to user queries                   | Comprehends context, semantics, and nuances of language
Scope                     | Narrow, focused on retrieving precise information           | Broad, encompassing various NLP tasks
Primary Goal              | Answer specific questions accurately                        | Understand and process language in a broader context
Complexity                | Can be complex but limited to predefined contexts or datasets| Requires deep processing and sophisticated models
Examples                  | - "What is the capital of France?" (Answer: Paris)          | - Sentiment Analysis: Understanding sentiment in reviews
                          | - "When was the company founded?"                           | - Text Summarization: Condensing articles into summaries
                          |                                                             | - Contextual Understanding: Maintaining conversation context
Applications              | - Customer support chatbots                                 | - Sentiment analysis
                          | - Search engines                                            | - Entity recognition
                          | - Virtual assistants                                        | - Text summarization
                          | - Financial reports                                         | - Machine translation
Real-World Use Cases      | - Answering FAQs on e-commerce sites                        | - Analyzing customer feedback
                          | - Providing direct answers in virtual assistants (e.g., Siri, Alexa) | - Recommending personalized content
                          | - Retrieving specific data from documents                   | - Understanding context in chatbots
Advantages                | - Quick, precise answers                                    | - Richer context and deeper understanding
                          | - Improves efficiency in information retrieval              | - Enhanced user interactions
Challenges                | - Handling ambiguous questions                              | - Dealing with language complexity and cultural nuances
                          | - Limited to available data and context                     | - Requires large datasets and sophisticated training

 */

/**
 * Create a knowledge base
 * ==> To create a question answering solution, you can use the REST API or SDK to write code that defines, trains, and publishes 
 * the knowledge base. However, it's more common to use the Language Studio web interface to define and manage a knowledge base
 * 
 * ==> To create a knowledge base in Language Studio, you need to:
 * - Define the schema: Define the structure of the knowledge base, including the fields and data types.
 * - Import data: Import the question and answer pairs into the knowledge base.
 * - Train the model: Train the knowledge base to improve the accuracy of the answers.
 * - Test the model: Test the knowledge base to ensure that it provides accurate answers.
 * - Publish the knowledge base: Publish the knowledge base to a REST endpoint for consumption.
 * 
 * 
 * Azure AI services  ==> Language Service ==> Azure AI Search resource to host the knowledge base index 
 * ==> Language Studio, select your Azure AI Language resource and create a Custom question answering project
 */

/**
 * Implement multi-turn conversation
 * ==> Multi-turn conversation is a feature of question answering that enables the bot to maintain context across multiple interactions.
 * This allows the bot to understand follow-up questions and provide more accurate answers.
 * ==> You can enable multi-turn responses when importing questions and answers from an existing web page or 
 * document based on its structure, or you can explicitly define follow-up prompts and responses for existing question 
 * and answer pairs.
 */

/** Test and publish a knowledge base
 * ==> After you've created a knowledge base, you can test it to ensure that it provides accurate answers to user queries.
 * ==> You can test the knowledge base in Language Studio by entering sample questions and evaluating the responses.
 */

/**
 * The minimal request body for the function contains a question, like this:
 */

// {
//     "question": "What do I need to do to cancel a reservation?",
//     "top": 2,
//     "scoreThreshold": 20,
//     "strictFilters": [
//       {
//         "name": "category",
//         "value": "api"
//       }
//     ]
//   }

/**
 * top: The number of answers to return. The default is 3.
 * scoreThreshold: The minimum score that an answer must have to be returned. The default is 15.
 * strictFilters: Limit to only answers that contain the specified metadata.
 */

/**
 * The response includes the closest question match that was found in the knowledge base, 
 * along with the associated answer, the confidence score, and other metadata about the question and answer pair:
 */

// {
//     "answers": [
//       {
//         "score": 27.74823341616769,
//         "id": 20,
//         "answer": "Call us on 555 123 4567 to cancel a reservation.",
//         "questions": [
//           "How can I cancel a reservation?"
//         ],
//         "metadata": [
//           {
//             "name": "category",
//             "value": "api"
//           }
//         ]
//       }
//     ]
//   }

/**
 * Improve question answering performance
 * ==> To improve the performance of your question answering solution, you can use active learning to continuously. it is a default feature in Language Studio.
 * ==> review suggestions: Language Studio provides suggestions for improving the knowledge base based on user interactions.
 * ==> Define synonyms: You can define synonyms for questions to improve the accuracy of the answers.
 */