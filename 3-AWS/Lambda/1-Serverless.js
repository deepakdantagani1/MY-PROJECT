/**
 * Severless is a paradiam in which the developers don't have to manage servers anymore
 * they just deploy code
 * they jest deploy funcitons
 * initially...serverless === FaaS(function as a aservice)
 * Serverless was pioneered by AWS Lambda but now also includes anyting that managed: 'database', messaging, storage, etc
 * serverless does not mean there are no servers...it means you just don't manage/provisio/see them
 *
 * sample archetecture:
 * users get static content from the s3 buckets
 * users will login though congnito ==> where the users will be stored
 * invoke the rest API through API gateway
 * API gateway invoke lambda functions
 * lambda function will store and retrive data from the DynamoDB
 *
 * sarverless in AWS
 * AWS lambda
 * DynamoDB
 * AWS congnito
 * AWS gatewy
 * Amazon s3
 * AWS SNS and SQS
 * AWS Kinesis data Firehouse
 * Aurora ServerLess
 * Step Functions
 * Fargate
 */
