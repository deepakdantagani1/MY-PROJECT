/**
 * networking has two sorts of ips. IPv4 and IPv6
 *
 * IPv6 is newer and solve problems for the IOT
 *
 * web server(public) 79.216.33.565                          server(pbulic) 234.456.78.5345
 *
 *
 *                                             WWW(two way communucaiton)
 *
 *
 * Internet gateway(public):678.345.678                     internet gateway(public): 234.2345.567.567
 * companyA private network 1234.1234.345                   companyB private network 123.123.234.234
 *
 *
 * public IP:
 * the machines can be identified on the internet(www)
 * must be unique across the whole web(not two macjoned can have the same public IP)
 * can be geo-locaiton easy
 *
 * Private IP:
 * the machine can be only be identified on the private network only
 * the ip must be unique across the provate network
 * but two different provate networks can be have the same ips
 * machines cannect to www using an internet gateway
 * only a specified range od ips can be used as provate ip
 *
 * Elastic IP:
 * We can mask the failure of an istance or software by rapidly reampping the address to another instance in our account
 * we can have 5 elastic ip in our account
 * try to avoide using elastic ip, they often reflect poor archetecture decisions, insted use a random public and registered a,
 * DNS name to it, or use Load Balancer register.
 * when stop and then start EC2 instance, it can change its public IP
 * if you need to have a public IP for instances, we need an elastic ip
 * an elastic ip is a public ip, which we own as long as we don't delete it
 *
 * By default:
 * EC2 machine comes with a private IP for the internal AWS Nwtwork and a public IP for the www
 *
 */
