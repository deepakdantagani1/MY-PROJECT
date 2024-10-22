/**
 * Use section markers
 * 
 * Tags allow the model to more clearly differentiate between instructions and content. For example:
 * 
 * Translate the text into French
---
What's the weather going to be like today?
---
 * 
 */


/**
 * Primary 
 * ==> Primary content refers to content that is the subject of the query, such as a sentence to translate or an article to summarize
 * 
 * ex: Summarize this article and identify three takeaways in a bulleted list
 * 
 */


/**
 * supporting
 * ==> Providing supporting content allows the model to respond more completely, accurately, and be more likely to include the desired information.
 */

/**
 * grounding content
 * ==> Grounding content could be an essay or article that you then ask questions about, a company FAQ document, or information that is more recent than the data the model was trained on
 * 
 * ex: ###Here is an article about the history of the internet###. What are three key takeaways?
 */

/**
 * Cues
 * ==> Cues are leading words for the model to build upon, and often help shape the response in the right direction
 * 
 * ex: ###Summarize the reviews above:,### Most common complaints:
 */

/**
 * Request output composition
 */

/**
 * System message
 * ==> The system message is included at the beginning of a prompt and is designed to give the model instructions, perspective to answer from, or other information helpful to guide the model's response
 * ex: I want you to act like a command line terminal. Respond to commands exactly as cmd.exe would, in one unique code block, and nothing else.
 */

/**
 * Conversation history
 */

/**
 * Few shot learning
 */

/**
 * Break down a complex task
 */

/**
 * Chain of thought
 */