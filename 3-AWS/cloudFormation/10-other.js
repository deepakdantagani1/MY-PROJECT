/**
 * ---changeSets---
 * when we update a stack, we need to know what chanes before it happens for the greate confidence
 * changeset won't say if the update will be secussful
 *
 * --nested stacks---
 * nested stacks are stacks as part of other stacks
 * they allow us to islolate repeated patters/common componensts in the seperate stacks and a call then for other stacks
 * example: load balancer config that is re-used, security group that is re-used
 * nested stacks are considered best practice
 * to update nested stack, always update the parent(root stack)
 *
 * ---cross vs nested stacks--- ??
 * cross ==> helpful when stacks have different lifecycle, use output exports and inports, example VPC
 * nested ==> helpful when components must be re-used
 * example, ALB
 *
 * ---stackSets---
 * create, update or delete stacks accross multiple accounts and regions with a single operations
 * admin accout to create stackSet
 * trusted accounts to create update and delete stack instances from the stackset
 * whenwe update a stack set, all associated stack instances are updated throughout all accounts and regions
 */
