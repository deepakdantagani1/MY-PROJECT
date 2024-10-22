/**
 * +------------------------------------------------------+
|                   Azure AI Search                    |
|                                                      |
|  +-------------+     +---------------------------+  |
|  |  Indexer    | --> |       Search Index         |  |
|  +-------------+     |                           |  |
|                      |  Movie Descriptions       |  |
|                      |  +--------------------+   |  |
|                      |  | classifiedtext     |   |  |
|                      |  | - category         |   |  |
|                      |  | - confidenceScore  |   |  |
|                      |  +--------------------+   |  |
|                      +---------------------------+  |
|                                                      |
|                    Custom Skillset                   |
|                          |                           |
|                          v                           |
|               +----------------------+               |
|               |    Azure Function App |               |
|               +----------------------+               |
|                         |                            |
|     +------------------------------------------+      |
|     | Custom Text Classification Model (NLP)   |      |
|     +------------------------------------------+      |
|                                                      |
+------------------------------------------------------+

 */


/**
 * Enrich a search index in Azure AI Search with custom classes and Azure AI Language
 * 
 * ==> Custom text classification allows you to map a passage of text to different user defined classes. 
 * For example, you could train a model on the synopsis on the back cover of books to automatically identify a books genre. You then use that identified genre to enrich your online shop search engine with a genre facet.
 */

/**
 * custom classes are more flexible and powerful for domain-specific tasks, while skills are quicker to deploy 
 * for general enrichment tasks.
 */

/**
 * Here, you'll see what you need to consider to enrich a search index using a custom text classification model
 * ==> Store your documents so they can be accessed by Language Studio and Azure AI Search indexers
 * ==> Create a custom text classification project
 * ==> Train and test your model
 * ==> Create a search index based on your stored documents
 * ==> Create a function app that uses your deployed trained mode
 * ==> Update your search solution, your index, indexer, and custom skillset
 */

/**
 * Store your data
 * 
 * You can choose between two different kinds of project, if a document maps to a single class use a single 
 * label classification project. If you could map a document to more than one class, use the multi label 
 * classification project.
 * 
 * {
    "projectFileVersion": "2022-05-01",
    "stringIndexType": "Utf16CodeUnit",
    "metadata": {
        "projectKind": "CustomMultiLabelClassification",
        "storageInputContainerName": "news-articles",
        "projectName": "NewsClassificationProject",
        "multilingual": false,
        "description": "A project to classify news articles into multiple categories like Politics, Sports, and Technology.",
        "language": "en-us"
    },
    "assets": {
        "projectKind": "CustomMultiLabelClassification",
        "classes": [
            {
                "category": "Politics"
            },
            {
                "category": "Sports"
            },
            {
                "category": "Technology"
            }
        ],
        "documents": [
            {
                "location": "article1.txt",
                "language": "en",
                "dataset": "training",
                "classes": [
                    {
                        "category": "Politics"
                    },
                    {
                        "category": "Technology"
                    }
                ]
            },
            {
                "location": "article2.txt",
                "language": "en",
                "dataset": "training",
                "classes": [
                    {
                        "category": "Sports"
                    }
                ]
            }
        ]
    }
}

 * 
 */

/**
 * Create your Azure AI Language project
 */

/**
 * Train your classification model
 */

/**
 * Create search index
 * ==> You'll be updating the index, indexer, and custom skill after you've created a function app.
 */

/**
 * Create an Azure function app
 * You can choose the language and technologies you want for your function app. The app needs to be able to pass 
 * JSON to the custom text classification endpoint, for example:
 */

/**
 * Update your Azure AI Search solution
 */