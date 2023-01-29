/**
 *
 *
 *
 * ==> enables web services application to quickly and reliably queue messages that one component in the application
 * grnerates for another componebt to consume
 * ==> queue is a trmpory repo for messages awating processing
 *
 * --queue access polocy---
 * reiured access need to assigned to the SQS queue for both pooling and send message
 *
 * ---message visibility timeout---
 * after a message is pooled by a consumer, it become invisible to other consumers
 * by default visibility timeout is 30sec, after that massage is visible in SQS queue, this could lead to repreocessing it
 * consumer could call ChangeMessageVisibility API to get more time.
 *
 * ---sqs dead leetter queue---
 * we can set a thereshole of how many times a message can go back  to the queue.
 * after the MaximumReceives throshold is exceeded, the message goes into a dead letter queue.
 * once the issue is fixed, we can redrive the message in the dead letter queue back to source
 *
 * --- standard ---
 * deafult and best-effort ordering
 * message is delivered at once
 * no limit for transations per secound
 * default retention of messages: 4 days and max of 14 days
 * limition of 265KB per message sent
 *
 *
 *
 * ---- fifo ---- )(finantial applications)
 * order is importent
 * message is delivery exactly once
 * no dulicates
 * 3000 transations per secound
 * deduplication intervel is 5min
 * message grouping
 *
 * -- shot pooling ---
 * returns a response immediately even if the message queue is being pooled empty
 * this can return lot of empty responses
 * still need to pay for empty reposnes
 *
 * --- long pooling ---
 * periodically pools the queue
 * don't return the response until a message  arrives in the message  queue or the long pool times out
 * can same money
 * long pooling is generally preferable to short pooling
 *
 * ==> visibility defalult is 30 sec, max is 12 hours
 *
 * -- delay queue ---
 * delay default is 0 sec, mas is 900 sec(15min)
 * large distributed application with may need to introduse a delay in process
 * need to apply a delay to an entire queue messages
 * allow to update sales nas stocks control db before sending a notification to a customer conforming an online transation
 *
 * --- large message using extended client ---
 * use s3 to save huge data, but the queue will be having a meta data about the object
 *
 * -- apis---
 * CreateQueue(MessageRentensionPeriod), DeleteQueue
 * PurgeQueue: Delete all messages in the queue
 * SendMessage(DelaySeconds), ReceiveMessage, DeleteMessage
 * MaxNumberOfMessages : Default is 1, max is 10
 * ReceiveMessageWaitTimeSeconds : long Pooling
 * change message visibilty: change message timeout
 *
 */
