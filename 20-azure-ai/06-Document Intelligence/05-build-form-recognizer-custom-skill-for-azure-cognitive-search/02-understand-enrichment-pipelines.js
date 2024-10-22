/**
 * If you integrate AI Search with an Azure AI Document Intelligence solution, you can enrich your index with fields that your 
 * Azure AI Document Intelligence models are trained to extract.
 */

/**
 * Indexing content in AI Search
 * 
 * Your Content (in the cloud or behind a firewall)
     |
     | Full Indexing
     | Refresh Indexing
     | AI Enrichment
     |
     V
Azure Cognitive Search
  ├── Indexing Engine
  |      |
  |      V
  |  Indexes and Other Structures
  |
  └── Query Engine
         |
         V
  Query Requests ↔ Query Responses

     Your App
  ┌──────────────────────────┐
  | 1. Collects user input    |
  | 2. Formulates and sends   |
  |    requests               |
  | 3. Handles responses:     |
  |    - Result set           |
  |    - Single document      |
  └──────────────────────────┘
 */

  /**
   * here are five stages to the indexing process:
   * ==> Document Cracking : he indexer opens the content files and extracts their content.
   * ==> Field Mappings : Fields such as titles, names, dates, and more are extracted from the content. 
   * You can use field mappings to control how they're stored in the index
   * ==> Skillset Execution : in the optional skillset execution stage, custom AI processing is done on the content to enrich the final index.
   * ==> Output field mappings :  If you're using a custom skillset, its output is mapped to index fields in this stage.
   * ==> Push to index: The results of the indexing process are stored in the index in Azure AI Search.
   */


  /**
   * What is a AI Search skillset?
   * You can create a customized list of skills that will be executed as a skillset in the third stage of indexing. Each skill is a call 
   * to an AI process that enriches the index. For example, an AI skill might translate words into different languages or extract words 
   * from a binary image.
   * 
   * Built-in skills
   * ==> Key phrase extraction
   * ==> Language detection
   * ==> Sentiment
   * ==> Translation
   * ==> Image analysis.
   * ==> Optical character recognition
   * ==> Merge
   */

  /**
   * create a custom skillset that calls a model in Azure AI Document Intelligence to help index documents.
   * 
   * ==> [service name] is the name of your Azure AI Search service.
   * ==> [skillset name] is the name of the skillset you're creating.
   * ==> [api version] is the version of the Azure AI Search API you're using.
   * ==> [admin key] is the admin key for your Azure AI Search service.
   * 
   * 
   * POST https://[service name].search.windows.net/skillsets/[skillset name]?api-version=[api version]
   * Content-Type: application/json  
   * api-key: [admin key]
   * 
   * ==> cognitiveServices : is required if you're using billable Azure AI Services APIs in your skillset. 
   * Provide the API key for your Azure AI Services multiservice resource.
   * ==> knowledgeStore : is required if you're using the knowledge store in your skillset.
   * ==> encryptionKey : is required if you're using a customer-managed key in your skillset.
   * 
   * The JSON code that defines the skillset looks like this:
   * {
   *  "description": "Extracts text from images and PDFs",
   * "skills": [
   * {
   * "description": "Extract text (plain and structured) from image and PDF documents",
   * "context": "/document",
   * "inputs": [
   * {
   * "name": "image",
   * "source": "/document/normalized_images/*"
   * }
   * ],
   * "outputs": [
   * {
   * "name": "text",
   * "targetName": "myText"
   * }
   * ],
   * "skillType": "shaper",
   * "skillSet": "ocr"
   * }
   * ]
   * }
   * 
   */

  /**
   * {   
  "name" : "A name for the skillset",  
  "description" : "Optionally, add a descriptive text.",   
  "skills" : [

    ],
  "cognitiveServices": 
      {
        "@odata.type": "#Microsoft.Azure.Search.CognitiveServicesByKey",
        "key": "<admin key>"
      },
  "knowledgeStore": { ... },
  "encryptionKey": { }
}
   */

/**
 * "skills":[
  {
    "@odata.type": "#Microsoft.Skills.Text.V3.EntityRecognitionSkill",
    "name": "Entity recognition",
    "context": "/document",
    "categories": [ "Organization" ],
    "inputs": [
      {
        "name": "text",
        "source": "/document/content"
      }
    ],
    "outputs": [
      {
        "name": "organizations",
        "targetName": "orgs"
      }
  },
  {
      "@odata.type": "#Microsoft.Skills.Vision.ImageAnalysisSkill",
      "name": "Image analysis",
      "context": "/document/normalized_images/*",
      "visualFeatures": [
          "brands"
      ],
      "inputs": [
          {
              "name": "image",
              "source": "/document/normalized_images/*"
          }
      ],
      "outputs": [
          {
              "name": "brands"
          }
      ]
  }
]
 */

/**
 * What is a custom skill?
 * Custom skills can be used for two reasons:
 * ==> The list of built-in skills doesn't include the type of AI enrichment you need.
 * ==> You want to train your own model to analyze the data.
 * 
 * There are two types of custom skill that you can create:
 * ==> Azure Machine Learning (AML) custom skills
 * ==> Custom Web API skills : ou can use this custom skill type to enrich your index by calling a web service. 
 * Such web services can include Azure applied AI services, such as Azure AI Document Intelligence.
 * 
 * If you're writing a web service to integrate into a AI Search indexing pipeline, you must conform to certain requirements. For example:
 * ==> The service must be a RESTful web service.
 * ==> The service must accept a JSON payload as an input and return a second JSON payload as its results.
 * ==> The Output JSON should have a top-level entity named values that contains an array of objects.
 * ==> The number of objects sent to the service should match the number of objects in the values entity.
 * ==> Each object in values should include a unique recordId property, a data property with the returned information, 
 * a warnings property, and an errors property.
 */

/**
 * Integrate AI Search and Azure AI Document Intelligence
 * ==> Azure AI Document Intelligence can use either a built-in model or a custom model to analyze the content of these images and 
 * return text, structural information, languages used, key-value pairs, and other data.
 * ==> That's the kind of data that may be useful in a AI Search index. For example, if the content that you index includes scanned sales 
 * invoices, Azure AI Document Intelligence can identify field such as currency amounts, retailer names, and tax information by using its 
 * prebuilt Invoice model. When users search for a retailer, you'd like them to receive a link to invoices from that retailer in their results.
 * ==> 
 */

/**
 * To integrate Azure AI Document Intelligence into the AI Search indexing pipeline, you must:
 * ==> 
 */