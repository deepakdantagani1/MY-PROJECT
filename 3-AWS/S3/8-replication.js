/**
 * CRR (cross region replication)
 *
 * SRR (same region replication)
 *
 * copying is async
 *
 * ==> only new objects are replicated if it is enabled, for old objects, use s3 batch replication
 * ==> deleat markers(no depleted perminently)
 * ==> delete version (deleated perminently)
 * ==> no chaining for replication
 *
 * ==> we need to manually select option to relicate delete markers replication
 */
