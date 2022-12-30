/**
 * Scalability means that an application/system can be handles greater loads by adapting.
 *
 * there are two kinds of scalability ==> vertical scalability, and Horizontal scalability (=elasticity)
 *
 * Vertical Scalability:
 * increase the size of the instance, for example applicaiton runs on a t2.micro, scaling the applicaiton vertically
 * means running it on a t2.large.
 * Vertical scalability si very common for non distributed systems, such as a database.
 * RDS, elasticCache are services that can be scal vertically.
 * there are usually a limit to how much you can vertically scale(hardware limit)
 *
 * Harizontal Scalability:
 * Increase the number of instances/systems for your applications, it implies to distributed systems
 * Very common for web applications or moderna applications
 * easy to horizontally scale through Amazon ec2
 *
 * high availability:
 * it goes hand on had with the horizontal scaling
 * it means running application/system in at least two data centers (==availability Zones)
 * the gole of high availability is to survive a data center loss
 *
 */
