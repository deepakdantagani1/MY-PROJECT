/**
 * -- scaling policies ---
 * ==> dynamic scaling policies (target tracking, like avg cup stay around 40%) (simple/step scaling, clpud watch alarm) (scheaduled actions)
 * ==> predictive scaling ()
 *
 * ==> AWS recommends that you use multipart upload for any files that are greater than 100 MB in size, instead of uploading the object in a single operation.
 * ==> What is the maximum size of an S3 object? 5tb
 * ==> What is the largest size file you can transfer to S3 using a PUT operation? 5 GB
 * ==> list of serverless and non server less
 * The following AWS technologies are serverless: DynamoDB, API Gateway, SNS, Lambda, Kinesis, and S3.
 * ==> Read/write capacity mode, make sure to check kb and sec
 * ==> How long can a message be retained in an SQS queue? 14 days
 * ==> Once the user has logged in to the web identity provider, use Cognito to exchange the authentication tokens for temporary access to DynamoDB
 * ==> AWS Secrets Manager is the current AWS recommended way of securely provide database credentials to Lambda functions. AWS Secrets Manager aids in the managing and rotating the RDS database passwords. For implementation details
 * ==> ECS is not serverless; however, it does include a serverless option, called Fargate.
 * ==> ElastiCache is the best option for storing session state as it is scalable, highly available,
 * ==> in-place roolback
 * With an in-place upgrade, you will need to redeploy the original version. Only a Blue / Green upgrade allows you to keep the original instances and roll back by routing all requests to the original instances.
 * ==> maximum size of an item in a DynamoDB table? 400 KB
 * ==> Amazon DynamoDB returns all the item attributes by default. What can you use to get only some, rather than all of the attributes?
 * ==> Elastic Beanstalk is not a supported method of deploying Lambda.
 * ==> In order to enable encryption at rest using EC2 and Elastic Block Store, you must ____.
 * ==> You have software on an EC2 instance that needs to access both the private and public IP address of that instance. What's the best way for the software to get that information?
 * ==> increase the performance of your volume?
 * Ensure that your EC2 instances are types that can be optimized for use with EBS
 * Schedule snapshots of HDD-based volumes for periods of low use
 * Stripe volumes together in a RAID 0 configuration.
 * (use HDD volumes, always ensure that SSDs are used) wrong
 * ==> HDD vs SSD
 * ==> An EBS-backed instance can be stopped and restarted without losing the data on the volume.
 *  * ==> go through s3 encryptions
 * ==> Your application needs to access content located in an S3 bucket which exists in a different AWS account. Which of the following API calls should be used to gain access?
 * ==> S3 Transfer Acceleration is recommended to increase upload speeds and is especially useful in cases where your bucket resides in a Region other than the one in which the file transfer was originated.
 * ==> S3 Transfer Acceleration is used to speed up content transfers to and from Amazon S3.
 * ==> x-amz-server-side-encryption
 * ==> STS:AssumeRole, eturns a set of temporary security credentials which can be used to access AWS resources, including those in a different account
 * ==> Viewer protocol policy defines the protocols which can be used to access CloudFront content.
 * ==> SMS text message-based MFA, onlu for AIM users
 * ==> We can create an alias for a specific version of your function and then use that alias in your resource-based policies or API Gateway to route a portion of traffic to the new version
 * ==> The visibility timeout for the queue is in seconds. Valid values are: An integer from 0 to 43,200 (12 hours), the Default value is 30.
 * ==> The length of time, in seconds, for which the delivery of all messages in the queue is delayed is configured using DelaySeconds attribute. MessageRetentionPeriod attribute controls the length of time, in seconds, for which Amazon SQS retains a message.
 * ==> By default, scripts entered as user data are executed with root user privileges. And By default, user data runs only during the boot cycle when you first launch an instance
 * ==>  CloudWatch Events delivers a near real-time stream of system events that describe changes in Amazon Web Services (AWS) resources. These help to trigger notifications based on changes happening in AWS services
 * ==> cloudformation yaml template objects
 * AWSTemplateFormateVersion
 * description
 * metadata
 * paramaters
 * mappings
 * conditions
 * transform
 * resources
 * output
 * ==> "Cognito User Pools", After successful authentication, Amazon Cognito returns user pool tokens to your app. You can use the tokens to grant your users access to your own server-side resources, or to the Amazon API Gateway.
 * ==> "Cognito Identity Pools" - You can use Identity pools to grant your users access to other AWS services. With an identity pool, your users can obtain temporary AWS credentials to access AWS services, such as Amazon S3 and DynamoDB. Identity pools support anonymous guest users, as well as the specific identity providers that you can use to authenticate users for identity pools.
 * ==> "Cognito Sync" - Amazon Cognito Sync is an AWS service and client library that enables cross-device syncing of application-related user data. You can use it to synchronize user profile data across mobile devices and the web without requiring your own backend.
 * ==> policies
 * https://share.icloud.com/photos/089NpO7ERCX0MRIKpFxOfoSmA
 * ==> "Lambda Authorizer", An Amazon API Gateway Lambda authorizer (formerly known as a custom authorizer) is a Lambda function that you provide to control access to your API. A Lambda authorizer uses bearer token authentication strategies, such as OAuth or SAML
 * ==> delete queue, vs purge queue
 * ==> Access Advisor feature on IAM console- To help identify the unused roles
 * ==> AWS Trusted Advisor - AWS Trusted Advisor is an online tool that provides you real-time guidance to help you provision your resources following AWS best practices on cost optimization, security, fault tolerance, service limits, and performance improvement.
 * ==> IAM Access Analyzer - AWS IAM Access Analyzer helps you identify the resources in your organization and accounts, such as Amazon S3 buckets or IAM roles, that are shared with an external entity.
 * ==> Amazon Inspector - Amazon Inspector is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS.
 * ==> "s3:x-amz-server-side-encryption":"aws:kms"
 * ==> X-Ray sampling, By customizing sampling rules, you can control the amount of data that you record, and modify sampling behavior on the fly without modifying or redeploying your code
 * ==> AWS Cloud Development Kit (CDK) - The AWS Cloud Development Kit (AWS CDK) is an open-source software development framework to define your cloud application resources using familiar programming languages.
 * ==> AWS Serverless Application Model (SAM) - The AWS Serverless Application Repository is a managed repository for serverless applications. It enables teams, organizations, and individual developers to store and share reusable applications, and easily assemble and deploy serverless architectures in powerful new ways
 * ==> CloudFront Key Pairs - IAM users can't create CloudFront key pairs. You must log in using root credentials to create key pairs.
 * ==> A Load Balancer can target EC2 instances only within an AWS Region.
 * ==> Backlog per instance: To calculate your backlog per instance, start with the ApproximateNumberOfMessages queue attribute to determine the length of the SQS queue (number of messages available for retrieval from the queue). Divide that number by the fleet's running capacity, which for an Auto Scaling group is the number of instances in the InService state, to get the backlog per instance.
 * ==> A Docker swarm is a container orchestration tool, meaning that it allows the user to manage multiple containers deployed across multiple host machines.
 * ==> AWS AppSync is a fully managed service that makes it easy to develop GraphQL APIs by handling the heavy lifting of securely connecting to data sources like AWS DynamoDB, Lambda, and more
 * ==> AWS Secrets Manager enables you to easily rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle
 * ==> WS Key Management Service (KMS) makes it easy for you to create and manage cryptographic keys and control their use across a wide range of AWS services and in your applications
 * ==> S3 Object Lock enables you to store objects using a "Write Once Read Many" (WORM) model.
 * ==> ALB access logs - Elastic Load Balancing provides access logs that capture detailed information about requests sent to your load balancer.
 * ==> AWS requires approximately 5 weeks of usage data to generate budget forecasts
 * ==> IAM policy variables, Instead of creating individual policies for each user, you can use policy variables and create a single policy that applies to multiple users (a group policy).
 * ==> IAM policy principal - You can use the Principal element in a policy to specify the principal that is allowed or denied access to a resource
 * ==> Key pairs - Key pairs consist of a public key and a private key. You use the private key to create a digital signature, and then AWS uses the corresponding public key to validate the signature
 * ==> Amazon EventBridge is a serverless event bus service offered by Amazon Web Services (AWS) that allows you to easily connect applications together using events. It is designed to make it easy to build event-driven architectures and to integrate AWS services and third-party services with each other.
 *
 *
 *
 */
