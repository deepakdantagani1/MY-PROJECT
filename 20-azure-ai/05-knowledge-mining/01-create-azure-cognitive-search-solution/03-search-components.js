/**
 * An AI Search solution consists of multiple components, each playing an important part in the process of 
 * extracting, enriching, indexing, and searching data.
 */

/**
 * Data source
 * Azure AI Search supports multiple types of data source, including:
 * ==> Unstructured files in Azure blob storage containers.
 * ==> Structured data in Azure SQL Database.
 * ==> Documents in Cosmos DB.
 * ==> alternatively, applications can push JSON data directly into an index, without pulling it from an existing data store.
 */

/**
 * Skillset
 * In Azure AI Search, you can apply artificial intelligence (AI) skills as part of the indexing process to enrich the source 
 * data with new information, which can be mapped to index fields.
 * Examples of the kind of information that can be extracted by an AI skill include:
 * ==> The language in which a document is written.
 * ==> Key phrases that summarize the content.
 * ==> A sentiment score
 * ==> Specific locations, people, organizations, or landmarks mentioned in the content.
 * ==> AI-generated descriptions of images, or image text extracted by optical character recognition.
 * ==> Custom skills that you develop to meet specific requirements.
 */

/**
 * Indexer
 * The indexer is the engine that drives the overall indexing process. It takes the outputs extracted using the skills in the skillset,
 * along with the data and metadata values extracted from the original data source, and maps them to fields in the index.
 * 
 * when you add new fields to an index or new skills to a skillset, you may need to reset the index before re-running the indexer.
 */

/**
 * Index
 * The index is the searchable result of the indexing process.
 * 
 * Each index field can be configured with the following attributes:
 * ==> key: Fields that define a unique key for index records.
 * ==> searchable: Fields that can be queried using full-text search.
 * ==> filterable
 * ==> sortable
 * ==> facetable
 * ==> retrievable
 */