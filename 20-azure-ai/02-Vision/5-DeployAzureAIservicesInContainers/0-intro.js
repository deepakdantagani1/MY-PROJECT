/**
 * create a container with a mage, pull it, add specifications, ai services will only capture billing info, 
 * application api is connected to the container endpoint
 */


/**
 * Containers: A container is a standard unit of software that packages up code and all its dependencies so the application
 * runs quickly and reliably from one computing environment to another. Essentially, containers allow you to package an
 * application with all of its dependencies into a standardized unit for software development. They are lightweight,
 * standalone, executable software packages that include everything needed to run a piece of software, including the code,
 * runtime, libraries, and system settings.
 */

/**
 * container image , container host, container registry, 
 */


/**
 * Use Azure AI services containers
 * ==> need container host to run the container
 * To deploy and use an Azure AI services container, the following three activities must occur:
The container image for the specific Azure AI services API you want to use is downloaded and deployed to a container host, 
such as a local Docker server, an Azure Container Instance (ACI), or Azure Kubernetes Service (AKS).
Client applications submit data to the endpoint provided by the containerized service, and retrieve results just as they 
would from an Azure AI services cloud resource in Azure.
Periodically, usage metrics for the containerized service are sent to an Azure AI services resource in 
Azure in order to calculate billing for the service.
 */

/**
 * Azure AI services container images
 */

/**
 * Azure AI services container configuration
 * 
 * ApiKey	Key from your deployed Azure AI service; used for billing.
Billing	Endpoint URI from your deployed Azure AI service; used for billing.
Eula	Value of accept to state you accept the license for the container.
 */

/**
 * Consuming Azure AI services from a Container
 */