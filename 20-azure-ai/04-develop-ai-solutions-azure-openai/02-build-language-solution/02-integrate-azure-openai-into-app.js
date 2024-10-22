/**
 * Azure OpenAI offers both language specific SDKs and a REST API that developers can use to add AI 
 * functionality to their applications.
 * 
 * different models are available for different tasks, such as text generation, text completion, and
 * 
 * deploy a model through the Azure AI Studio, Azure CLI, or REST API
 */

/**
 * Create an Azure OpenAI resource
 * 1) Sign in to the Azure portal
 * 2) Select Create a resource
 * 3) Search for OpenAI
 * 4) Select OpenAI
 * 5) Select Create
 * 6) Fill in the required fields
 * 7) Select Review + create
 */


/**
 * Choose and deploy a model
 * 
 * Model families break down into three main families:
 * 1) Generative Pre-trained Transformer (GPT) models: These models are designed to generate text based on a prompt.
 * 2) Code (gpt-3 and earlier ==> Code models are built on top of GPT models, and trained on millions of lines of code. 
 * These models can understand and generate code, including interpreting comments or natural 
 * language to generate code. gpt-35-turbo and later models have this code functionality included without the need for a separate code model.
 * 3) Embeddings models: These models are designed to generate embeddings for text, which can be used 
 * for tasks like semantic search or text classification.
 */


/**
 * Authentication and specification of deployed model
 * When configuring your app, you need to specify your resource endpoint, key, and deployment name to specify which 
 * deploy model to send your request to
 */

/**
 * Available endpoints
 * 
 * Azure OpenAI can be accessed via a REST API or an SDK. 
 * The available endpoints are:
 * 1) completions: This endpoint generates completions to prompts.
 * 2) ChatCompletion: This endpoint generates completions to prompts in a chat-like format.
 * 3) embeddings: This endpoint generates embeddings for text.
 */