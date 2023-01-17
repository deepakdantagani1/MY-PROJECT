/**
 * event source mapping will poll from SQS
 * specify the batch size
 * to septup the sqs dead leatter queue, set up sqs queue, not lambda
 *
 * ==> lambda re supported in-order processing for FIFO queue, scaling up to no of active messages group
 * ==> for standard queus, items ar enot necessarly processed in order
 * ==> when an error occcured, batchesa are returned to the queue as indvivdual items, and might be peocessed
 * in different grouping than the original batch
 * ==> occasionally, the event soure mapping might  receive the same item from the queue twice, even if no error occured.
 * ==> we can  config the source to send items ot a dead-letter queue if they can't be processed
 */
