/**
 *
 * ALB(ec2 launchtype), dynamic host mapping, security in ec2
 * ALB(fargate), each task has a inique private IP,  only define the container post(host post is not applicable)
 * one IAM role for each task
 * env veriables, secreate manager, SSM parmater store, s3
 *
 * https://share.icloud.com/photos/0b4qn7BsMdSRZJznOKG6Icb-g
 * ECS - loadbalancing (ecs launchtype)
 * ==> we get a dynamic host port mapping if we define only the container port in the task definition
 * ==> ALB will find the right post of the EC2 instances
 * ==> we must allow on the EC2 instance security group ANY PORT from the alb security group
 *
 * https://share.icloud.com/photos/026J0BUnz7ucYc1ZKR16OTBwQ
 * ECS -load balancing (fargate)
 * ==> each task has a inique private IP
 * ==> only define the container post(host post is not applicable)
 *
 * https://share.icloud.com/photos/032OOyNH8rIFLL1ioYaDOld7g
 * ECS - one IAM role per task definition
 * ==> if an ECS task role is defined using a task definition, then all the tasks in the services will inheret all the roles
 *
 * https://share.icloud.com/photos/02bkIyoqk081aJADzhcKKRfGg
 * ECS - environment veriables
 * ==> we can get them by hardcoading, SSM paramater sore or a secreate manager
 * ==> other way is to get them from s3 bucket
 *
 * EC2 - dava volumes
 */
