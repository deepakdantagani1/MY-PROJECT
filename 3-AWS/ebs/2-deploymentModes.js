/**
 * https://share.icloud.com/photos/0e8QQgrx8D8zjR9l0TSxLlTgg
 *
 * ---all at once---
 * fast deployment
 * downtime
 * quick iteration in development env
 * no additional cost
 *
 * ---rolling----
 * application is below capacity
 * can set the bucket size
 * application is running both versions simultaneously
 * no additional cost
 * long deployments
 *
 * ---rolling with additional batches---
 * application is running at capacity
 * can set the bucket size
 * application is running both versions simultaneously
 * longer deployments
 * good for prod
 *
 * --immutable---
 * zero downtime
 * new code is deployed to a new instances on a temporary ASG
 * high cost, double capcacity
 * longer deployments
 * quick rollback in case of failures
 * great for prod
 *
 * --blue gree---
 * not a direct feature of beanstalk
 * zero downtime and release facitlty
 *
 * ---traffic splitting---
 * canary testing
 * new pplication version is deployed to a temp ASG with the same capacy
 * small % of traffic is sent to the temporary asg for a configurable amount of time
 * deployment health is monitires
 * if there is a deployment failure, this triggers an automated roolback
 * no application downtime
 * new instances are migrated from the temp to the original asg
 * old application version is then terminated
 *
 *
 */
