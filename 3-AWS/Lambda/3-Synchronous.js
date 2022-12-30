/**
 * We are using synchronous invocations when we are using CLI, SDK, API gateway, Application Load Balancer
 * ==> We are waiting for the results, which will be retirned right waay
 * ==> Error handeling must be happen on client side (retries, exponential backoff etc...)
 *
 * Lambda - Sysnchronous Invocation - services
 * user Invoked:
 * ==> Elastic load balancer (Applicaiton Lead balancer)
 * ==> API gateway
 * ==> CloudFront(Lambda@edge)
 * ==> s3 batch
 * Service Invoked:
 * ==> Cognito
 * ==> Step functions
 * OtherL:
 * ==> lex
 * ==> Alexa
 * ==> Kinesis data firehouse
 */
