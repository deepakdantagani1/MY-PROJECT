/**
 * -- scaling policies ---
 * ==> dynamic scaling policies (target tracking, like avg cup stay around 40%) (simple/step scaling, clpud watch alarm) (scheaduled actions)
 * ==> predictive scaling ()
 *
 * ==> AWS recommends that you use multipart upload for any files that are greater than 100 MB in size, instead of uploading the object in a single operation.
 * ==> What is the maximum size of an S3 object? 5tb
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
 *
 *
 */
