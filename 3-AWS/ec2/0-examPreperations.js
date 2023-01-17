/**
 * In order to enable encryption at rest using EC2 and Elastic Block Store, you must ____.
 * You have software on an EC2 instance that needs to access both the private and public IP address of that instance. What's the best way for the software to get that information?
 * increase the performance of your volume?
 * ==> Ensure that your EC2 instances are types that can be optimized for use with EBS
 * ==> Schedule snapshots of HDD-based volumes for periods of low use
 * ==> Stripe volumes together in a RAID 0 configuration.
 * ==> (use HDD volumes, always ensure that SSDs are used) wrong
 * HDD vs SSD
 * An EBS-backed instance can be stopped and restarted without losing the data on the volume.
 */
