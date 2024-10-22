/**
 * knowledge store:
 * A knowledge store is essentially a way to persist enriched data from the Cognitive Search enrichment pipeline into Azure Storage. 
 * This enriched data includes the information extracted by skills (e.g., OCR, key phrase extraction, sentiment analysis, etc.).
 */

/**
 * Projections in a Knowledge Store
 * ==> Object Projections
 * ==> Table Projections
 * ==> files Projections
 * 
 * you must define a separate projection for each type of projection, even though each projection contains lists for tables, objects, 
 * and files. Projection types are mutually exclusive in a projection definition, so only one of the projection type lists can be populated
 */

/**
 * example:
 * "knowledgeStore": { 
      "storageConnectionString": "<storage_connection_string>", 
      "projections": [
        {
            "objects": [
                {
                "storageContainer": "<container>",
                "source": "/projection"
                }
            ],
            "tables": [],
            "files": []
        },
        {
            "objects": [],
            "tables": [
                {
                "tableName": "KeyPhrases",
                "generatedKeyName": "keyphrase_id",
                "source": "projection/key_phrases/*",
                },
                {
                "tableName": "docs",
                "generatedKeyName": "document_id", 
                "source": "/projection" 
                }
            ],
            "files": []
        },
        {
            "objects": [],
            "tables": [],
            "files": [
                {
                "storageContainer": "<container>",
                "source": "/document/normalized_images/*"
                }
            ]
        }
    ]
 }
 */