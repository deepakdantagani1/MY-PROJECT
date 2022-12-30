/**
 * ==> contentdelivery network
 *  ==> sytem of distributed services, which delivers web pages nad other web content.
 * ==> edge location ==> collectoin of services which geolocation dispersed datacenters
 * ==> cloudFront uses edge loation to save copies of objects(web pages/images)
 *
 * ---cloudfront edge locations---
 * ==> this is where content is cached. seperate to an aws region/az
 * --- cloud front origin ---
 * ==> this is the origin of all the files that the distribution will serve. can be an s3 bucket,
 * an ec2 instance, an elastic load balancer, or route53
 *
 * use cases
 * Accelerate static website content delivery
Serve video on demand or live streaming video
Encrypt specific fields throughout system processing
Customize at the edge
Serve private content by using Lambda@Edge customizations
 *
 *
 *
 */
