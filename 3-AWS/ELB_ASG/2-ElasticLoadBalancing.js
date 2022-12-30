/**
 * load balancing:
 * servers thats forward internet traffic to multile servers(EC2 instances) downstream
 *
 *
 * user1 <----->                          <---->       [ec2 instance]
 * user2 <----->       [load balancer]    <---->       [ec2 instance]
 * user3 <----->                          <---->       [ec2 instance]
 *
 *
 * use?
 * spread load across multile downstreams instances
 * expose a single point of access(DNS) to applicaiton
 * semlessly handle failures of downstream instances
 * do regular health checks to instances
 * provide ssl termination(https) for websites
 * enforce stickiness with cookies
 * high availability across zones
 * seperate public traffic from private traffic
 *
 * why ec2 load balancer?
 * it is a managed laod balancer(ELB)
 * guarantees that it will be working
 * takes care of upgrades, maintenance, high availability
 * provides only a few config knobs
 * costs less to setup
 * integrated with many AWS offerings/servers
 *
 * Health cheks:
 * thay are critical for laod balancers
 * they enable the load balannser to know if instances it forwards trffic to are available to are available toreply to reqests
 * the health checks is done on a port and a route
 * if the response is not 200,then the instance is unhealthy
 *
 * types of loas balancer:
 * classic load balancer (v1- old generations) -2009 (http, https, TCP)
 * applcaiiton laod balancer(v2 new generation) - 2016 (http, https, websocket)
 * Network load balancer (v2, new generation) - 2017(TCP, TLS(secure TCP) & UDP)
 * over all it is recommneded to use the new/v2 generation load balancer as they are provided more features
 *
 * we can setup internal(private) or external (public) ELBs
 *
 *
 *
 * users          https/http(from anywhere)       [laod balancer]         http restricted to load balancer        [ec2]
 *                <----------------------->                               <------------------------------>
 *
 *
 *
 * good to know:
 * LBs can scale but not instantaneously -- contact AWS for a 'warm-up'
 * troubleshooting ==> 4xx errors are client incluced errors
 *                 ==> 5XX errors are applicaiton induced errors
 *                ===> laod balancer errors 503 means at capacity or no registered target
 *                 ==> if the LB can't connect to application, check the security groups
 *
 * Mohitoring ==> ELB access logs will log all sccess requsrs(we can debug per request)
 *            ==> Cloudwatch metrix will give you aggregation statistics(ex: connections count)
 *
 */
