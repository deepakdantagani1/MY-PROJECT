/**
 * To integrate Azure AI Document Intelligence into the AI Search indexing process, you must write a Web service that 
 * integrates the custom skill interface.   
 */

/**
 * Custom skill interface and requirements
 * code should handle the following input values in the JSON body of the REST request:
 * ==> values: The JSON body will include a collection named values. Each item in this collection represents a form to analyze.
 * ==> Each item in the values collection has a recordId. You must include this ID in the output JSON so that AI Search can 
 * match input forms with their results.
 * ==> formUrl: The URL of the form to analyze.
 * ==> formSasToken: The SAS token for the form.
 */


/**
 * {
    "values": [
        {
            "recordId": "record1",
            "data": { 
                "formUrl": "<your-form-url>",
                "formSasToken": "<your-sas-token>"
            }
        }
    ]
}
 */

/**
 * {
    "values": [
        {
            "recordId": "record1",
            "data": {
                "address": "1111 8th st. Bellevue, WA 99501 ",
                "recipient": "Southridge Video 1060 Main St. Atlanta, GA 65024"
            },
            "errors": null,
            "warnings": null
        }
    ]
}
 */

/**
 * Add the custom skill to a skillset
 * 
 * {
  "@odata.type": "#Microsoft.Skills.Custom.WebApiSkill",
  "description": "A custom skill that calls Azure AI Document Intelligence",
  "uri": "https://contoso.com/formrecognizer",
  "batchSize": 1,
  "context": "/document",
  "inputs": [
    {
      "name": "formUrl",
      "source": "/document/metadata_storage_path"
    }
  ],
  "outputs":[ 
    { 
      "name":"address",
      "targetName":"address"
    },
    { 
      "name":"recipient",
      "targetName":"recipient"
    }
  ]
}
 */