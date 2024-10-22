/**
 * Improve the ranking of a document with term boosting
 * 
 * ==> an enhanced version of Apache Lucene for full text search
 */

/**
 * Search an index
 * query parsing ==> lexical analysis ==> document retrieval ==> scoring
 */

/**
 * Write a simple query vs Enable the Lucene Query Parser
 * 
 * Simple query:search=luxury&$select=HotelId, HotelName, Category, Tags, Description&$count=trues
 * 
 * Lucene Query Parser:search=luxury AND air con&$select=HotelId, HotelName, Category, Tags, Description&$count=true&queryType=full
 * ==> Boolean operators: AND, OR, NOT for example luxury AND 'air con'
 * ==> Fuzzy search: luxury~0.8
 * ==> Wildcard search: lux*
 * ==> Fielded search
 * ==> Regular expression search:
 * ==> Precedence grouping
 * ==> term proximity search
 */

/**
 * Boost search terms (tags)
 * Using the above you can improve the results. The parser should give a higher priority to hotels in the luxury category. 
 * You can also be more precise and look for air conditioning in the Tags field.
 * 
 * search=(Description:luxury OR Category:luxury^3) AND Tags:'air con'*&$select=HotelId, HotelName, Category, Tags, Description&$count=true&queryType=full
 */