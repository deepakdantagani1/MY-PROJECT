/**
 * Understand the indexing process
 * ==> The indexing process works by creating a document for each indexed entity
 */

/**
 * document
    metadata_storage_name
    metadata_author
    content
    normalized_images
        image0
        image1
    language
 */

/**
 * The fields in the final document structure at the end of the pipeline are mapped to index fields by the indexer in one of two ways:
 * ==> Fields extracted directly from the source data are all mapped to index fields
 * ==> implicitly mapped fields
 * ==> explicitly mapped fields
 * Output fields from the skills in the skillset are explicitly mapped from their hierarchical 
 * location in the output to the target field in the index.
 */