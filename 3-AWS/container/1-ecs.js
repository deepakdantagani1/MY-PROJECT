/**
 *
 * https://share.icloud.com/photos/0aey1kC6Wzw8MzdkJoRABJhLQ
 *
 * ecs ==> elastic container service
 * launch docker container on AWS ==> launch ecs tasks on ECS clusters
 * each ec2 instance must run the ecs agent to register in the ecs cluster
 * aws takes care of starting and stoping containers
 *
 * fargate launch type  ==> launch docker containers on the aws
 *                      ==> this is for se4rver less
 *                      ==> just needs to create task definition, aws runs ecs takts based on the cpu/ram we need
 *
 * https://share.icloud.com/photos/0dbvuYKxYTTFtMOPHeSFJb2fw
 * ---IAM roles for ecs---
 * ec2 instance profile(ec2 launch type only):
 * ==> used by ecs agent
 * ==> make api calss to ecs service
 * ==> send container logs to cloudwatch logs
 * ==> pull docker image from the ECR
 * ==> reference sensitive data in secreats amanager or ssm paramater store
 *
 * ECS tak role:
 * ==> allows each task to have a specific tole
 * ==> task role is defined in the task definitions
 *
 * ---load balancer intigration---
 * ==> application load balancer suppors and works most of the time
 * ==> Network load balancer recommended only for high throughput/high performance use cases
 * ==> elastic load balancer supports but not recommended (no advances features, no Fargate)
 *
 * https://share.icloud.com/photos/0fenFTp9n_QOUUujTphKluk-Q
 * ---data volumes (efs)---
 * ==> mount efs file systems onto ecs tasks
 * ==> forks for both ec2 and fargate launch tupes
 * ==> tasks running in any AZ will share the same data in the EFS file system
 * ==> fargate + efs == serverless
 * ==> use cases: persistent multi-az shared storate for containers
 * ==> note: amazon s3 cannot be mounted as a file system
 *
 *
 *
 *
 */
