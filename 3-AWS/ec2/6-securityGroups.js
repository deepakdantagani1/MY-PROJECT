/**
 * security groups are the fundamantal of network security, they act as a firewall on ec2 instances
 *
 * they regulate access to ports, authorisad ip ranges - ipv4 and ipv6, control of inbound network also outbound
 * if application is not accessable(time out), then it's s security group issue
 * if applicaiton gives a "connection refused" error, then it's an application error or it's not launched
 * by default, all inbound traffic is blocked, and all outbound traffic is authorised
 *
 * we can have a one security group that inbounds two different groups
 *
 * they control how traffic is allowed into or out of our ec2 machines
 * [www] ==><== (inbound, outbound ports) {security group} [ec2 machine]
 *
 * it is the most fundamantal skill to thoubleshoot networking
 *
 *
 */
