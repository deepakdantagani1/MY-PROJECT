/**
 * Service tiers and capacity management
 * ==> free tier
 * ==> basic tier : Use this tier for small-scale search solutions that include a maximum of 15 indexes and 2 GB of index data.
 * ==> standard tier : se this tier for enterprise-scale solutions. There are multiple variants of this tier, including S, S2, and S3; 
 * which offer increasing capacity in terms of indexes and storage, and S3HD, which is optimized for fast read performance on smaller numbers of indexes.
 * ==> Storage Optimized (L): Use a storage optimized tier (L1 or L2) when you need to create large indexes, at the cost of higher query latency.
 */

/**
 * Replicas and partitions
 * ==> Replicas: Replicas are copies of an index that are distributed across different nodes in the search service. 
 * ==> Partitions: Partitions are horizontal slices of an index that are distributed across different nodes in the search service.
 * 
 * use of partitioning?
 * answer: Partitioning allows you to distribute the data in an index across multiple nodes in the search service.
 * also it allows you to scale out the storage and query capacity of your search service.
 */

/**
 * search units ==> replicas multiplied by the number of partitions (R x P = SU)
 * ex: If you have an index with 3 replicas and 3 partitions, you need 9 search units to support the index.
 */