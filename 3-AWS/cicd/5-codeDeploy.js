/**
 * https://share.icloud.com/photos/085mhu3OneUJVvi00pjEOUoRw
 * ==> appspec.yaml.js ==> this tells codeDeploy how to deploy the application
 * ==> each ec2 instance/on-premises server must be running the codeDeploy Agent
 * ==> the agent is continuously pooling aws codeDeploy for work to do
 * ==> application + appspec.yml is pulled from gitub or s3
 * ==> ec2 instance will run the deployment instructions in appspec.yml
 * ==> codeDeplou agent will report of success/failure of the deployment
 *
 * --code deployment primary components---
 * application
 * compute platform
 * deployment config
 * deployment group
 * deployment type
 * IAM instance profile
 * application revision
 * service role
 * target rivision
 *
 * ---deployment types---
 * inplace
 * blue/green
 *
 * ---hooks---
 * beforeInstall
 * afterInstall
 * applicationStart
 * validateService
 */
