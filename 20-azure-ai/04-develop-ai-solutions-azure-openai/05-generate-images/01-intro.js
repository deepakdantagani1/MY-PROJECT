/**
 * This module described the DALL-E image generation model, and how you can use it in the Azure OpenAI service to 
 * generate images based on natural language prompts. You can explore DALL-E using the playground in Azure AI Studio, 
 * and you can use the REST API to build applications that use DALL-E to generate new images.
 */



/**
 * Use the Azure OpenAI REST API to consume DALL-E models
 * 
 * The request must contain the following parameters in a JSON body:
 * ==> prompt: The text prompt to generate an image from
 * ==> n: The number of images to generate
 * ==> size: The size of the image to generate
 * ==> quality: The quality of the image to generate 
 * ==> style: (natural or vivid). Defaults to vivid.
 */