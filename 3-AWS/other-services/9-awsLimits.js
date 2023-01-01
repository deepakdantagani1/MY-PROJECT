/**
 * API limits   ==> describeinstances api for ec2 has a limit of 100 calls per secound
 *              ==> getObject on s3 has a limit of 5500 get per secound prt prefix
 *              ==> for intermittent errors : implement exponential backoff
 *              ==> for consistence errors: request an api throttling limit increase
 *
 * service limits   ==> running on demain instances : 1152 vCPU
 */
