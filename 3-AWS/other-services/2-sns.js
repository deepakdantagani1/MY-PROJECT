/**
 * a web service that makes it easy to setup, operate, and send notifications from the cloud.
 * uses pub sub patterns
 * idea is to send one message to many receivers
 * 12 million subscriorions per topic
 * some of the sibscribers are sqs, labda, kinesis data stream, emails, sms notifications, http end points
 *
 * --- used for ---
 * ==> push notificatons
 * ==> sms and emails
 * ==> tregger lambda
 *
 * --features---
 * ==> durable storage
 * ==> instantaneous
 *
 * ---sns + sqs fan out---
 * one SNS and multiple SQS if one message needs to be prcessed by different queus
 *
 * --fifo topics---
 * same as sqs
 *
 * --message filter---
 *
 *
 *
 */
