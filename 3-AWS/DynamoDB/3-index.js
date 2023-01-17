/**
 * seconday index provides more flexibale quering in the dynamo db
 * allows qury based on an attribute that is not the primary key using global and local secondaty indexes
 *
 * --- local secondary inxed ----
 * only created when creating a table, has the same partition key as the orignal table but a different sort key
 * this given an different view
 * faster queries, any queries based in this sort key are much faster using the index then the main table]
 * can not update or remove later
 *
 * --- global secondary index ----
 * can be created any time
 * both patition key and sort key can be diffrent then the table
 * speed ups the queries that are related to the partition key or the sort key
 *
 *
 */
