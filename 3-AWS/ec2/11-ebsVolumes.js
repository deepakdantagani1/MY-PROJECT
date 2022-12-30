/**
 * elastic block store : storage volumes that can be attached to the ec2 instances
 *
 * --featires--
 * mission critical production workloads
 * haighly available
 * scalable
 *
 * --types--
 * general perpose ssd (gp2)
 * ==> reasonable proice with reasonable performance,
 * ==> 3iops per gb, max of 16,000iops per volume
 * ==> smaller than 1tb
 * ==> good for bootvolumes or development or test
 * ==> new version gp3, volume size 1gb 16tb, 3000 ipos
 *
 * Provisioned iops ssd (io1)
 * ==>high performance option and most expensive
 * ==> 64,000 iops per volume and 50 iops per gb. usw if f we have more than 16,000 iops per
 * ==> designed for io intensive applications, large database nd latency sensitive workloads
 * ==> new vwerion io2, highest durable and more iops. 500 iops per gib, up to 64,000 iops per volume. 99.999% durable sted of 99.9%
 *
 * Provisioned iops ssd io2 block express
 * ==> new from aws, it is a storage area network in the cloud, highest performance, sub milli secound latency
 * ==> used ebs express archetectire
 * ==> provides 4X througnputs, IOPS, and capacity f regular io2 volumes
 * ==> upto 64tbs, 246,000iops per volume, 99.999 durability
 * ==> great for the largest, most critical, high performance applications
 *
 * Throughput optimized HDD (st1)
 * ==> low cost hdd volumes
 * ==> store huge amount of data but wont access frequently
 * ==> baseline throughput of 40mb/s per tb
 * ==> ability to burst upto 250 mb/s per tb
 * ==> max 500 mb/s per volume
 * ==> frequently assessed, throghout intence workloads,
 * ==> application like bigdata, data ware house, ETL ans logs processing
 * ==> a cost effective way to to store mountaines of data
 * ==> cannot be used as boot volume
 *
 * clod HDD (sc1)
 * ==> owest cost options
 * ==> baseline throughput of 12mb/s per tb
 * ==> ability to burst upto 80 mb/s per tb
 * ==> max 250 mb/s per volume
 * ==> good for colder data, fewer scans per day
 * ==> good for low cost and performance is not a factor
 *
 * IOPS vs throughputs
 * ------------------------------------------iops------------------------------------
 * ==> measures no of reades and write operations per seconds
 * ==> important matric for quick transations, low latency apps, transational workloads.
 * ==> the ability to action read and right ery quickly
 * ==> choose Provisioned iops ssd (io1) or io2
 *
 * ------------------------------------------throughput-----------------------------
 * ==> measures the number of bits written per secound
 * ==> important matrics for large database, large IO size operations, comples query
 * ==> he ablility to deal with large datasets
 * ==> choose Throughput optimized HDD (st1)
 *
 */

