/**
 * Understand resources for building a conversational language understanding model
 * 
 * ---Build your model---
 * you'll need to create your Azure AI Language resource in the Azure portal.
 * ==> Search for Azure AI services.
 * ==> Select Language Service.
 * ==> Select Create under the Language Service.
 * ==> Fill out the required fields and select Create.
 * 
 * 
 * ---Use Language Studio----
 * Language Studio is a web interface that allows you to create and manage your language understanding models.
 * 
 * ----Use the REST API----
 * One way to build your model is through the REST API. The pattern would be to create your project, import data, train, 
 * deploy, then use your model.
 * 
 * Authentication
 * You can authenticate your requests to the Azure AI Language service by using an API key.
 * 
 * Request deployment
 * Once you've trained your model, you can deploy it to a REST endpoint.
 * {ENDPOINT}/language/authoring/analyze-conversations/projects/{PROJECT-NAME}/deployments/{DEPLOYMENT-NAME}?api-version={API-VERSION}
 * ENDPOINT ==> The endpoint for your Azure AI Language resource.
 * PROJECT-NAME ==> The name of your project.
 * DEPLOYMENT-NAME ==> The name of your deployment.
 * API-VERSION ==> The version of the API you're using.
 * 
 * Get deployment status
 * You can get the status of your deployment by sending a GET request to the deployment endpoint.
 * 
 * ---Query your model---
 * Once you've deployed your model, you can query it to get predictions.
 * 
 * Query using SDKs
 * You can use the Azure SDKs to query your model.
 * 
 * Query using the REST API
 * You can also query your model using the REST API.
 * 
 * differences between SDKs and REST API
 * SDKs provide a more user-friendly way to interact with the service, while the REST API provides more flexibility.
 * 
 * 
 * 
 * 
 */