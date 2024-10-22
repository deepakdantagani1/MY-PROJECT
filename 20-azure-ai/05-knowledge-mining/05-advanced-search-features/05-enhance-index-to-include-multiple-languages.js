/**
 * When adding multiple language support to an Azure AI Search index, the goal is to ensure that your search engine can process and return relevant results based on the language the user is using. This process involves 
 * ==> creating language-specific fields in your index, 
 * ==> enriching your data with translations if needed, and 
 * ==> configuring custom analyzers to improve search relevance for each language. 
 */

/**
 * Step 1: Adding Language-Specific Fields in indexing
 * ==> To add multiple languages to an index, first, identify all the fields that need a translation. 
 * Then duplicate those fields for each language you want to support.
 * 
 * {
      "name": "description",
      "type": "Edm.String",
      "facetable": false,
      "filterable": false,
      "key": false,
      "retrievable": true,
      "searchable": true,
      "sortable": false,
      "analyzer": "en.microsoft",
      "indexAnalyzer": null,
      "searchAnalyzer": null,
      "synonymMaps": [],
      "fields": []
    },
    {
      "name": "description_de",
      "type": "Edm.String",
      "facetable": false,
      "filterable": false,
      "key": false,
      "retrievable": true,
      "searchable": true,
      "sortable": false,
      "analyzer": "de.microsoft",
      "indexAnalyzer": null,
      "searchAnalyzer": null,
      "synonymMaps": [],
      "fields": []
}}
 */

/**
 * limit the fields returned in a search request
 * ==> You can also select which fields are being searched. Your language specific search solution can combine these two
 *  features to focus on fields with specific languages in them.
 * 
 * {
  "@odata.context": "https://advanced-cognitive-search.search.windows.net/indexes('realestate-us-sample-index')/$metadata#docs(*)",
  "value": [
    {
      "@search.score": 12.124968,
      "listingId": "OTM4MjY1OA2",
      "description_fr": "Il s'agit d'un condo et est parfait pour se divertir.  Cette maison offre des vues côtières Situé à proximité d'une rivière et un bureau, moulures and une véranda couverte.",
      "city": "Seattle",
      "region": "wa",
      "tags": [
        "condo",
        "entertaining",
        "coastal views",
        "river",
        "office",
        "crown mouldings",
        "covered front porch"
      ]
    },
 */

/**
 * Enrich an index with multiple languages using Azure AI Services
 */

/**
 * Add the translation skillsets
 * You add two skills into the skillset definition to translate the document/description fields into the two languages.
 */

/**
 * Map the translated output into the index
 * The last step is to update the indexer to map the translated text into the index.
 */
