/**
 * when task of ec2 is launched, ECS must determine where to place it, constrans of CUP, MEMORY and available PORTS
 * same for termination too
 * to assit this, we can define a task placement strategy nad task placement contraints
 * node: this is only for ECS with ec2 not for fargate
 *
 * types of stratigies
 * ==> binpack, min no of EC2 instances
 * ==> random
 * ==> spread (high availablity)
 *
 * constraints
 * ==> distinctInstance
 * ==> memberOf
 */
