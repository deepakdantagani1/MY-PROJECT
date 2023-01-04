/**
 *
 * https://share.icloud.com/photos/0daEZl9esJP5H3PNTYSVmNEVg
 *
 * load balancing multiple HTTP applicaiton across machines(targer groups)
 * laod balancing to multiple applications on the same machine(ex: containers)
 * support for http/s and websockets
 * support redirects(from http tp https for example)
 *
 * routing tables to different groups
 * ==> routing based on paths in url (example.com/users and example.com/posts)
 * ==> routing based on hostname i  url (one.example.com and other example.com)
 * ==> routing based on on query string headers(example.com/users? id 123& order=false)
 *
 * ALB are a great fit for micro services and container-based appliations (example: dockers and amazon ECS)
 *
 * has a port mapping feature to redirect to a dynamic port inec2
 *
 * in comparizon, we'd need multiple classic load balancer per applicaiton
 *
 *
 *
 * www      route/user             http        [target group for USERS application [ec2] [ecw] {health check application}]
 *        <------------>           <---->
 *
 *     [  external applicaiotn load balancer ]
 *
 * www      route/search             http        [target group fro Search application [ec2] [ecw] {health check application}]
 *        <------------>           <---->
 *
 *
 * application load balancer (v2) target groups:
 * EC2 instances (can be managed by auto scaling groups) - http
 * EC2 tasks (managed by ECS itself) -- HTTP
 * lambda functions - http requests is traslated into JSON event
 * LP Addresses - must be private IPs
 *
 * ALB can be routed to multile target groups
 * health checks are at the target group level
 *
 * examps preperation
 * *******imp***** good to know:
 * fixed hostname (XXX.region.elb.amazonaws.com)
 * the application server don't see the ip od the client directly
 * ==> true IP of the client is is=nserted in the headers X_Forwarded-for
 * ==> we cana lso get post (X-Forwarded-port) adn proto(X_forwarded-proto)
 * ==> ALBs can route traffic to different Target Groups based on URL Path, Hostname, HTTP Headers, and Query Strings
 * but not client locations
 * ==> Network Load Balancer has one static IP address per AZ and you can attach an Elastic IP address to it. Application Load Balancers and Classic Load Balancers as a static DNS name.
 * ==>  Application Load Balancer name formate
 * cookie names are reserved by the ELB (AWSALB, AWSALBAPP, AWSALBTG).
 *
 *
 *                                                                                          laod balancer LP(provate IP)
 * client ip(567.345.567) <------------> connection termination(applicaiton laod balancer)   <-------------------> ec2
 *
 */
