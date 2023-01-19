/**
 *
 * route53, DNS, ttl for route 53, records type, hosted zones, routing policies, healthchecks
 *
 * route 53 is a amazon dns server
 * allows to map a domain names that we own to ec2, load balancers, s3 buckets
 *
 * ----- what is DNS server? -----
 * The purpose of a DNS(Domain Name System) server is to translate what a user types into their browser into something a computer can understand and use to locate a website. In other words, its purpose is to convert a domain name such as www.example.com into an IP address such as 71.232.101.120.
 * domain register: amazon route 53, goDaddy
 * DNS records
 * Zone files : contains dns records
 * name server : resolve dns queries
 * top level domain : .com, .us
 * secound level domain, amazon.com, google.com
 * ttl needs to be added bases on the requirements
 *
 * route 53 ==> load balancer ==> ec2
 *
 *   http://api.www.example.com.
 *                             _ (root)
 *                         _____ (top level domin)
 *                 _____________ (secound level domin)
 *              ________________ (sub domin)
 *          ____________________ (domain name)
 *   _____                       (protocol)
 *   ___________________________ (fully qualified domain name)
 *
 * ----- route 53 overview ----
 * highly available, scalable, fully managed and authritative(customer can update dns records) dns.
 * it is also a domain register
 * ability to check the health of resources
 *
 * ==> records types
 * A -> map host to ipv4
 * AAAA -> maps host to ipv6
 * cname -> maps host to another host
 * NS -> name servers of the hosted zones
 *
 * ==> hosted zones
 * a container of records that defines how to route to a domain and it's sub doamins
 * -> public hosted zones
 * -> private hosted zones
 *
 * ==> creating the records
 * once the DNS server is created, we need to create a record and assign the respective ip address
 * example.com is server
 * test.example.com is a record
 *
 * ==> CNAME vs Alias record types
 * ****CNAME****
 * 1) AWS resources like load balancer, cloudfront... exposes an host name
 * 2) CNAME --> points one host name to another host name (only for non root domains ie spmething.example.com)
 * ****Alias****
 * 1) ponints a hostmane to an aws resource
 * 2) works for root and non root domains
 * 3) free
 * 4) native heath check
 * 5) no ttl
 *
 * ***************** cannot set an alias records for an EC2 DNS names *********************
 *
 * ==> routing policies
 * 1) simple
 * --> routes traffic to single resource
 * --> if multipl, one will be returned
 * --> anias enabled, only one aws resource
 * --> no association with health check
 * 2) weighted
 * --> routes traffic according to the waited resources
 * 3) failover
 * --> primary
 * --> secondary
 * 4) latency based
 * --> redirects to the resources that has the least latency close to us
 * 5) geolocation
 * --> based on the location assigned during creating a record
 * 6) multi-value answer
 * --> this is not substitute of having elb
 * 7) geoproximity
 * --> based on the user locatipn
 *
 * ******* health checks *******
 * --> this is only for public resources
 *
 *
 *
 *
 *
 *
 *
 *
 */
