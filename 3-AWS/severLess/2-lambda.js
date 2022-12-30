/**
 * allows to run code in AWS without provisining any servers
 *
 * even-driven-arc
 *
 * triggers
 * => DynamoDB
 * => SQS
 * => Applicaiton load balancer
 * => api gateway
 * => cloudfront
 * => s3
 * => SNS
 * => SES
 * => cloud formation
 * => cloudwatch
 * => code commits
 * => code pipeline
 *
 * hands-on
 * => tabs (config, secu, monitoring, test)
 *
 * Versions
 * => ARN (Amazon Resource Name)
 * ==> using aliases and version number
 *
 * Concurrent Execution limits
 * => default is 1,000 concurrent executions
 * => tooManyRequestsException code 429
 *
 * Access to VCP Resources(DB, S3, EC2)
 * => provide subnet ID, security group ID,
 * => aws lambda update-function-configuration --function-name my-function --vcp-config SubnetIds=subnet-23456, SecurityGroupIDs=sg-456789
 *
 *
 *
 *
 */
