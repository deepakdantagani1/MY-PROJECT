/**
 *
 * https://share.icloud.com/photos/0e4jxC-3PfXrGe_lCU4qV7UhQ
 *
 * allows TCP and UDP traffic to instances
 * handles misslions of requests per sec
 * less latency ~ 100 ms(vs 400 ms for ALB)
 *
 * NLB has one static IP per AZ, and supports assinging Ealstiic IP(helpful for whitelisting specific IP)
 *
 * NLB are used for extreme performance, TCP or UDP traffic
 *
 * Not included in the AWS free tier
 *
 * steps:
 * ==> go to loadbalancer, create new
 * ==> give a name and select loade balancer prototype
 * ==> config security groups(which as all the inbounds and out bound rules), make sure the security groups has the TCP rules
 * assigned to them
 * ==> configure the routing, add the target groups(targated instances)
 */
