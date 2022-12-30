/**
 * Amazon EC2:
 * ==> virtual server in the cloud
 * ==>Limited by RAM and CPU
 * ==> Continious running
 * ==> Scalling means intervention to add/remove servers
 *
 * Amazon Lambda:
 * ==> Virtual Functions - no server to manage
 * ==> limited by time - short executions (90 min)
 * ==> Run on -demand
 * ==> scaling is automated
 *
 * Benifits of AWS:
 * ==> easy prising ==> pay per request and compute time
 *              ==> free tier of 1000000 AWS lambda requests and 400000 GB of compute time
 * ==> Integrates with the whole AWS suite of services
 * ==> Integrated with many programming languages
 * ==> Easy to get more resources per funvtion (uo to 3gb of ram)
 * ==> Increase RAM will also increase CUP and network!
 * ==> easy monitor through AWS cloud watch
 *
 * NOTE: Docker is not for the Lambda, it's for ECS/fargate
 *
 * AWS Lambda Intigrations: (main once)
 * Api gateway ==> to create the API and to invole the lambda functions
 * Kinesis ==> to do data transformation on the fly
 * DynamoDb ==> used to create so triggers wheever sonething happens in our database, a lambda funciton will be triggred
 * S3 ==> a lambda function will be triggred whwn wvwn a file is created in s3
 * CloudFront ==> this will be a lambda edge
 * CloudWatch Events Event bridge ==> Whenever things happen in infrastructure on AWS and want to able to react to things like
 *                                    there is a codepipeline change and we want to do some automation based on it, we can use
 *                                    lambda functions
 * coludWatch Logs ==>  to stream logs
 * SNS ==> to react notification topics
 * SQS ==> to process message from the SQS
 * Cognitp ==> to react changes in DB
 *
 * Examples:
 * ServerLess Thumbnail creation
 * 1) New image in se
 * 2) this will trigger a lambda function which pushes new compress files in to another s3 bucket
 * 3) the same Lambda will update image detials like matadata in DynanmoDB
 *
 * Crone Jobs
 * 1) use CloudWatch evens event bridge
 *
 * handsOn:
 * ==>
 */
