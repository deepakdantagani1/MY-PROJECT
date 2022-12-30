/**
 * with the cross zone load balancer instance distributes evenly across all registered instances in all AZ
 *
 * otherwise, each laod balancer mode discributes requests evenly across the registerd instances in its availability zones only
 *
 * CLB: disabled, nochanges for inter AZ data if enabled
 * ALB: always on(can't disabled), no cahnges
 * NLB: disabled by default, pay cahnges for inter AZ data if anabled
 *
 * steps:
 * ==> in the loadbalancer, attributes, we have cross zone load balancer
 */
