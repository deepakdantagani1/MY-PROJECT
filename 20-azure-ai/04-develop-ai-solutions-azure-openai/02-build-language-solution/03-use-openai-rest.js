/**
 * OpenAI REST API (YOUR_ENDPOINT_NAME, YOUR_API_KEY, YOUR_DEPLOYMENT_NAME)
 * 
 * For each call to the REST API, you need the endpoint and a key from your Azure OpenAI resource, 
 * and the name you gave for your deployed model. In the following examples, the following placeholders are used:
 * 
 * YOUR_ENDPOINT_NAME: The endpoint name from your Azure OpenAI resource.
 * YOUR_API_KEY
 * YOUR_DEPLOYMENT_NAME: The name you gave to your deployed model.
 * 
 * other parameters include: temperature, max_tokens, top_p, frequency_penalty, presence_penalty, stop, and logprobs
 * 
 */


/**
 * Chat completions
 * 
 * curl https://YOUR_ENDPOINT_NAME.openai.azure.com/openai/deployments/YOUR_DEPLOYMENT_NAME/chat/completions?api-version=2023-03-15-preview \
  -H "Content-Type: application/json" \
  -H "api-key: YOUR_API_KEY" \
  -d '{"messages":[{"role": "system", "content": "You are a helpful assistant, teaching people about AI."},
{"role": "user", "content": "Does Azure OpenAI support multiple languages?"},
{"role": "assistant", "content": "Yes, Azure OpenAI supports several languages, and can translate between them."},
{"role": "user", "content": "Do other Azure AI Services support translation too?"}]}'
 * 
 * */

/**
 * Embeddings
 * 
curl https://YOUR_ENDPOINT_NAME.openai.azure.com/openai/deployments/YOUR_DEPLOYMENT_NAME/embeddings?api-version=2022-12-01 \
  -H "Content-Type: application/json" \
  -H "api-key: YOUR_API_KEY" \
  -d "{\"input\": \"The food was delicious and the waiter...\"}"
 */