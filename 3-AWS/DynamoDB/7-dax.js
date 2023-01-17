/**
 * fully amanaged, clustered in memory cache for DynamoDb
 * used fpr read heavy applications
 * not sutable for strongly consistent reads
 * applications that won't have many write operations
 * that does not require microseconds response time
 *
 *
 * ---DAX vs Elastic cache---
 * DAX  ==> individual objects caache
 *      ==> query & scan cache
 *
 * Elastic Cache ==> store aggregration results
 *
 */
