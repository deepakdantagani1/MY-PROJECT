/**
 * provide governance, compliance and audit for aws account
 * cloudTrail is eanbled by default
 * get an history of events / apicalls made within AWS account by console, sdk, cli, aws services
 * can put logs from clouttrile into cloudwatch logs or s3
 * if a resource is deleated in aws, investigate cloudtrail first
 *
 * different types of events
 * ==> mamagement events, Management events provide information about management operations that are
 * performed on resources in your AWS account. These are also known as control plane operations. Example management events.
 * ==> data events, Data events provide information about the resource operations performed on or in a resource.
 * These are also known as data plane operations. Data events are often high-volume activities. The following data types are recorded
 * ==> insignts events, CloudTrail Insights events capture unusual API call rate or error rate activity in your AWS account
 */
