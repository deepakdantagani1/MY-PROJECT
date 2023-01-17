/**
 * https://share.icloud.com/photos/0d4tnulAZG8a3f2d8JrLMKoUw
 * streams and lambda (Kinesis and DynamoDB)
 * ==> An event source mapping creates an iterator for each shard, process items in order
 * ==> starts with an new item, from beginning or from the timestamp
 * ==> processed item aren't removed from the stream, other consumers can read them
 * ==> Low traffic, use batch processing to accumulate records  before  processing
 * ==> we can process multiple batches in parallel
 * upto 10 batches per shard
 * in order processing is still garenteed for each partition key
 *
 *
 * ---error handeling---
 * ==> by deflult if function returns an error, the entire batch is reprocessed until the function is successed
 * or the item in the batch is expired
 * ==> to ensure in-order processing, processing for the affected  shared  is paused untill the error is resolved
 * ==> we can config the event source mapping to
 * discard old event
 * restrice no of retries
 * split the batch on error
 * ==> discarded event can go to Destination
 */
