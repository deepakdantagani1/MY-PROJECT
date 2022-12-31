/**
 * https://share.icloud.com/photos/043LYY0UThlaFj2eaRejG0Z7w
 * https://share.icloud.com/photos/018tygzMJ3u-t35hc7xk3nmNg
 *
 * https://www.icloud.com/photos/#026XiGIqHpZNNdt8kUV3Cu8Jg
 * vpc ==> virtual private cloud
 * it is a private network to deploy resources (regional resources)
 *
 * subnets ==> this allow to partiton network inside VPC (scope: availability zone resources)
 *         ==> two types, public and private subnets
 *
 * Route tables ==> to define access to the internet nad between subnets we use route tables
 *
 * internet gateway ==> helps VPC instances connect to internet. public subnet has a route to internet gateway
 *
 * https://share.icloud.com/photos/09aGCEZpEP71Mf3Z9S-Z_2keQ
 * NAT gateway and NAT instances ==> this will allow internet in Private subnet to access the intrnet while remaining private
 *
 * https://share.icloud.com/photos/0cddwKbNQ6SQlK981hDGRpyYQ
 * Network ACL (NACL) ==> a firewall that control traffic from and to subnet.
 *                    ==> this can have allow and deny rules.
 *                    ==> this is at subnet level
 *                    ==> rules only include ip address
 *
 * security group ==> a firewall that controls traffic to and frow an ENI/ an EC2 instance
 *                ==> can have only allow groups
 *                ==> rules include IP address and other security groups
 *
 * VPC Peering ==> connect two VPC
 *             ==> mush not have an overlaping CIDR (IP address range)
 *             ==> peering connection is not transitive
 *
 * https://share.icloud.com/photos/0f01V0zj1PBykJz8WJ0x9LWMg
 * vpc endpoint** ==> endpoint aloow to connect to AWS resources, not to the internet
 *                ==> enhanced security and lower latency access
 * vpc endpoint gateway ==> only for s3 and dynamodb
 * vpc endpoint interface ==> the rest
 *
 * site to site vpn ==> connect an on-premises VPN to aws
 * dirrect connect ==> physical connection between on-premices and AWS
 *
 * VPC Flow Logs is a feature that enables you to capture information about the IP traffic going to and from network
 * interfaces in your VPC. Flow log data can be published to the following locations: Amazon CloudWatch Logs,
 * Amazon S3, or Amazon Kinesis Data Firehose. After you create a flow log, you can retrieve and view
 * the flow log records in the log group, bucket, or delivery stream that you configured.

Flow logs can help you with a number of tasks, such as:

Diagnosing overly restrictive security group rules

Monitoring the traffic that is reaching your instance

Determining the direction of the traffic to and from the network interfaces
 */
