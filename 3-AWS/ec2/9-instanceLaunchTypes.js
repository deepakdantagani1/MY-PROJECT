/**
 * on demand instances: short workload, predictable pricing
 * pay for what you use(billing per sec, after the first min)
 * has the highest cost but no upfront payment
 * no long term conmmitments
 * recommended for short-term ans un-interrupted worloads, where you can't predict how the applicaitons will behave
 *
 * Reserved:(min 1 year)
 * long workloads
 * up to 75% discount compared to on-demand
 * pay upfrount for what you use with long term commitments
 * reservation period can be 1 or 3 years
 * reserve a specific instance type
 * recommnded for steady state usage applicaitons(think database)
 *
 * convertible reserved instances: ling workloads with flexible instances
 * can change the EC2 instance type
 * up to 54% discount
 *
 * Scheaduled Reserved instances- ex:every specific day between 3 and 6 pm
 * launch within time window you reserve
 * when you require a fraction of day/week/month
 *
 * spot instances: short workloads, for cheap, can lose instance(less reliable)
 * can get a discount upto 90% compared to on-demand
 * instances that you can "lose" at a point of time if your max proce is less than the current spot price
 * usefulf for workloads that are recilient to failures ==> batch jobs, data analysis, image processing...etc
 * not a great for critical jobs or DB
 * great combo, reserve instancrs for baseline + on-demain & spot for peaks
 *
 * Dedicated Instances: no ther customers will be share hardware
 * instances running on hardware thats dedicated to us
 * may share hardware with other instances insame account
 * no control over instace placement(can move hardware after stop/start)
 *
 * Dedicated hosts: book an entire physical server, control instance placement
 * physical dedicated ec2 server for your use
 * full control of ec2 instance placement
 * visibility into underlying sockets/physical cores of the hardware
 * allocated for your account for a 3 years period reservations
 * more expensive
 * useful for softwares that have complicated licensing modek(BYOL-bring your own lincense)
 * or for companies that ahve string regulations or compilance needs
 *
 *
 */
