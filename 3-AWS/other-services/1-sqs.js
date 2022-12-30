/**
 * ==> enables web services application to quickly and reliably queue messages that one component in the application
 * grnerates for another componebt to consume
 * ==> queue is a trmpory repo for messages awating processing
 *
 * --- standard ---
 * deafult and best-effort ordering
 * message is delivered at once
 * no limit for transations per secound
 *
 *
 *
 * ---- fifo ---- )(finantial applications)
 * order is importent
 * message is delivery exactly once
 * no dulicates
 * 3000 transations per secound
 *
 * -- shot pooling ---
 * returns a response immediately even if the message queue is being pooled empty
 * this can return lot of empty responses
 * still need to pay for empty reposnes
 *
 * --- long pooking ---
 * periodically pools the queue
 * don't return the response until a message  arrives in the message  queue or the long pool times out
 * can same money
 * long pooling is generally preferable to short pooling
 *
 * ==> visibility defalult is 30 sec, max is 12 hours
 *
 * -- delay queue ---
 * delay default is 0 sec, mas is 900 sec
 * large distributed application with may need to introduse a delay in process
 * need to apply a delay to an entire queue messages
 * allow to update sales nas stocks control db before sending a notification to a customer conforming an online transation
 *
 * --- large message ---
 * use s3
 */
