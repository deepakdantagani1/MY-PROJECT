/**
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
 * ==> ---CloudFront Key Pairs--- - IAM users can't create CloudFront key pairs. You must log in using ---root credentials--- to create key pairs.
 * ==> ****A Load Balancer can target EC2 instances only within an AWS Region***.
 * ===> ***Global Accelerator which is a global load balancer***
 * ==> Backlog per instance: To calculate your backlog per instance, start with the ApproximateNumberOfMessages queue attribute to determine the length of the SQS queue (number of messages available for retrieval from the queue). Divide that number by the fleet's running capacity, which for an Auto Scaling group is the number of instances in the InService state, to get the backlog per instance.
 * ==> A ---Docker swarm--- is a container orchestration tool, meaning that it allows the user to manage multiple containers deployed across multiple host machines.
 * ==> ---AWS AppSync--- is a fully managed service that makes it easy to develop GraphQL APIs by handling the heavy lifting of securely connecting to data sources like AWS DynamoDB, Lambda, and more
 * ==> AWS ---Secrets Manager--- enables you to easily rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle
 * ==> AWS ---Key Management Service (KMS)--- makes it easy for you to create and manage cryptographic keys and control their use across a wide range of AWS services and in your applications
 * ==> ---S3 Object Lock--- enables you to store objects using a "Write Once Read Many" (WORM) model.
 * ==> ---ALB access logs--- - Elastic Load Balancing provides access logs that capture detailed information about requests sent to your load balancer.
 * ==> AWS requires approximately ---5 weeks--- of usage data to generate budget forecasts
 * ==> ---IAM policy variables---, Instead of creating individual policies for each user, you can use policy variables and create a single policy that applies to multiple users (a group policy).
 * ==> ---IAM policy principal--- - You can use the Principal element in a policy to specify the principal that is ---allowed or denied--- access to a resource
 * ==> With the IAM policy simulator, you can test and troubleshoot IAM and resource-based policies attached to IAM users, groups, or roles in your AWS account. You can test which actions are allowed or denied by the selected policies for specific resources.
 * ==> Key pairs - Key pairs consist of a public key and a private key. You use the private key to create a digital signature, and then AWS uses the corresponding public key to validate the signature
 * ==> ---Amazon EventBridge--- is a serverless event bus service offered by Amazon Web Services (AWS) that allows you to easily connect applications together using events. It is designed to make it easy to build event-driven architectures and to integrate AWS services and third-party services with each other.
 * ==> ---Security Token Service (STS)--- which is a service that enables you to request ---temporary, limited-privilege credentials for AWS Identity and Access Management (IAM) users--- or for users that you authenticate (federated users).
 * ==> AWS Secrets Manager vs KMS
 * ==> AWS ---Cloud9--- is a cloud-based integrated development environment (IDE) that lets you write, run, and debug your code with just a browser.
 * ==> hooks used To specify code, scripts, or functions that you want to run at set points in the deployment lifecycle.
 * ==> status codes
 * throttling error (429 status code).
 * 200
 * 5XX error indicates a server-side error,
 * 4XX error indicates a client-side error.
 * 504 status code is a Gateway Timeout
 * 429 error means that the application is generating too many requests
 * ==> Basic monitoring is enabled by default. Data is available automatically in ---5-minute--- periods at no charge.
 * ==> You need to publish a custom metric to handle application-specific events. If you want to collect metrics at ---10-second intervals---, you need to use ---high-resolution metrics---.
 * ==> By default, API Gateway limits the steady-state request rate to ---10,000 requests per second---. The 429 error means that the application is generating too many requests and is being throttled.
 * ==> A status of ---ALARM--- indicates that the metric or expression is outside of the defined threshold.
 * ==> Reserved Instance discount for a total of 3600 seconds per clock-hour; instance usage that exceeds 3600 seconds in a clock-hour is billed at the On-Demand rate.
 * ==> appspec.yml ==> deployment on EC2 instances via AWS CodeCommit and AWS CodeDeploy
 * ==>  .ebextensions/ ==> AWS Elastic Beanstalk for deployment
 * ==> sqs queue ==> approximately 120,000 inflight messages, but no limit for storing
 * ==> An SSH key is a type of authentication method used to secure access to a server or other computer. It uses a pair of unique cryptographic keys, one private and one public, to encrypt and decrypt data transmitted over a network
 * ==> AWS Step Functions is a serverless function orchestrator that makes it easy to sequence AWS Lambda functions and multiple AWS services into business-critical applications.
 * ==> in lambda, we can configure Application Auto Scaling to manage provisioned concurrency on a schedule or based on utilization
 * ==> DynamoDB uses eventually consistent reads by default. Read operations (such as GetItem, Query, and Scan) provide a ConsistentRead parameter. If you set this parameter to true, DynamoDB uses strongly consistent reads during the operation
 * ==> By default, basic monitoring is enabled when you use the AWS Management Console to create a launch template or launch configuration
 * ==> The maximum ratio of provisioned IOPS to requested volume size (in GiB) is 50:1
 * ==> CloudFormation currently supports the following parameter types:
 * String – A literal string
 * Number – An integer or float
 * List<Number> – An array of integers or floats
 * CommaDelimitedList – An array of literal strings that are separated by commas
 * AWS::EC2::KeyPair::KeyName – An Amazon EC2 key pair name
 * AWS::EC2::SecurityGroup::Id – A security group ID
 * AWS::EC2::Subnet::Id – A subnet ID
 * AWS::EC2::VPC::Id – A VPC ID
 * list<AWS::EC2::VPC::Id> – An array of VPC IDs
 * List<AWS::EC2::SecurityGroup::Id> – An array of security group IDs
 * List<AWS::EC2::Subnet::Id> – An array of subnet IDs
 * ==> DynamoDB has two built-in backup methods (On-demand, Point-in-time recovery) that write to Amazon S3, but you will not have access to the S3 buckets that are used for these backups.
 * ==> AWS Glue is a fully managed extract, transform, and load (ETL) service that makes it easy for customers to prepare and load their data for analytics.
 * ==> Hive is a data warehousing and SQL-like querying tool that runs on top of Hadoop. Amazon EMR (Elastic MapReduce) is a managed service that makes it easy to process big data using Hadoop and other big data processing frameworks, such as Hive.
 * ==> AWS Data Pipeline is a web service that helps you reliably process and move data between data stores. It allows you to define data-driven workflows, called pipelines, to perform tasks such as scheduling regular data movement and data processing activities.
 * ==> AWS CodeDeploy rolls back deployments by redeploying a previously deployed revision of an application as a new deployment on the failed instances.
 * ==> While AWS KMS does support sending data up to 4 KB to be encrypted directly, envelope encryption can offer significant performance benefits.
 * When you encrypt data directly with AWS KMS it must be transferred over the network.
 * Envelope encryption reduces the network load since only the request and delivery of the much smaller data key go over the network.
 * ==> When you encrypt your data, your data is protected, but you have to protect your encryption key. One strategy is to encrypt it. Envelope encryption is the practice of encrypting plaintext data with a data key, and then encrypting the data key under another key.
 * The data key is used locally in your application or encrypting AWS service, avoiding the need to send the entire block of data to AWS KMS and suffer network latency.
 * ==> Drift detection in AWS refers to the process of identifying and tracking changes to the configuration of an AWS resource, such as an Amazon RDS database or an Amazon S3 bucket.
 * ==> VPC Flow Logs is a feature that enables you to capture information about the IP traffic going to and from network interfaces in your VPC.
 * ==> When you create an EBS volume, it is automatically replicated within its Availability Zone to prevent data loss due to the failure of any single hardware component
 * ==> All DynamoDB tables are encrypted at rest using an AWS-owned CMK by default. Non-encrypted DynamoDB tables are no longer supported in AWS. You have the option to pick an alternative AWS or Customer Managed KMS key if required.
 * ==> Cognito enables developers to remember the devices on which end-users sign in to their application.
 * You can see the remembered devices and associated metadata through the console.
 * In addition, you can build custom functionality using the notion of remembered devices.
 * For example, with a content distribution application (e.g., video streaming),
 * you can limit the number of devices from which an end-user can stream their content.
 * ==> CodeDeploy interacts with EC2 via the CodeDeploy agent,
 * which must be installed and running on the EC2 instance.
 * During a deployment, the CodeDeploy agent running on EC2 pulls the source code from CodeCommit.
 * The EC2 instance accesses CodeCommit using the permissions defined in its instance profile role;
 * therefore, it is the EC2 instance itself that needs CodeCommit access.
 * The specific CodeCommit permission needed to pull code is codecommit:GitPull.
 * ==> CodeDeploy doesn't support deployments to EKS pods, either hosted on EC2 or Fargate.
 * ==> DeletionPolicy attribute can be used to preserve a specific resource when its stack is deleted. The Retain option can be used to ensure AWS CloudFormation keeps the resource.
 * ==> Elastic Beanstalk supports custom AMIs via Packer.
 * This would allow the legacy application to be wrapped in a layer of abstraction such that
 * Elastic Beanstalk itself would not need to support the specific language of the legacy application.
 * ==> A permissions boundary in AWS is a security control that allows you to set the maximum permissions
 * that an IAM user, group, or role can have. It acts as an advanced restriction on the permissions granted in an
 * IAM policy, allowing you to limit the actions a user can perform. Permissions boundaries are useful in
 * situations where you need to grant an IAM entity the minimum permissions necessary to perform its tasks,
 * but you also want to ensure that it cannot escalate its permissions beyond what you have explicitly allowed.
 * ==> AWS Fargate is a serverless compute engine for containers that works with both Amazon Elastic Container Service (ECS) and Amazon Elastic Kubernetes Service (EKS).
 * ==> Using a cross-Region Read Replica can help ensure that you get back up and running if you experience a regional availability issue.
 * ==> Automated backups are limited to a single AWS Region while manual snapshots and Read Replicas are supported across multiple Regions.
 * ==> Database cloning is only available for Aurora
 * ==> Application Load Balancers, cross-zone load balancing is always enabled.
 * ==> With S3 Object Ownership, any new objects that are written by other accounts with the
 * bucket-owner-full-control canned access control list (ACL) automatically become owned by the bucket owner,
 * who then has full control of the objects.
 * ==> terminated the container instance while it was in STOPPED state, that lead to this synchronization issues
 *
 *
 *
 *
 *
 *
 */
