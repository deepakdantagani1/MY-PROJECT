/**
 * Search an index
 * ==> After you have created and populated an index, you can query it to search for information in the indexed document content. 
 * While you could retrieve index entries based on simple field value matching, most search solutions use full text search semantics to 
 * query an index.s
 * 
 */

/**
 * Full text search
 * Azure AI Search supports two variants of the Lucene syntax:
 * ==> Simple query syntax: An intuitive syntax that makes it easy to perform basic searches that match literal 
 * query terms submitted by a user.
 * ==> Full :mAn extended syntax that supports complex filtering, regular expressions, and other more sophisticated queries.
 *
 */

/**
 * Some common parameters submitted with a query include:
 * ==> search: The search query string.
 * ==> queryType: The type of query to execute. The default is simple.
 * ==> searchFields: The fields to search in the index.
 * ==> select: The fields to retrieve from the index.
 * ==> searchMode: The search mode to use. The default is all.
 * Criteria for including results based on multiple search terms. For example, suppose you search for comfortable hotel. 
 * A searchMode value of Any returns documents that contain "comfortable", "hotel", or both; while a searchMode value of All 
 * restricts results to documents that contain both "comfortable" and "hotel".
 * 
 * 
 * {
  "search": "comfortable hotel",
  "queryType": "simple",
  "searchFields": "description, title",
  "select": "title, description, location, rating",
  "searchMode": "all"
}

 */

/**
 * Query processing consists of four stages: 
 * ==> Query parsing.
 * ==> Lexical analysis : for example, "comfortable" might be simplified to "comfort"
 * ==> Document retrieval
 * ==> Scoring
 */