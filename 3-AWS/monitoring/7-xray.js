/**
 * ==> it provides visual analysis of the applications
 *
 * --adventages--
 * troubleshooting performance
 * understand dependency in a microservice architecture
 * pinpoint service issues
 * review request behavior
 * fimd error and exceptions
 * are we meeting time sla?
 * where iam throttled
 * identify users that are impacted
 *
 * ---x-ray leverages tracktracinging--
 * tracing is an end to end way to follow a request
 * each component dealing with the request adds it;s own trace
 * tracing is make of segments
 * annothation can be added to traces to provide extra information
 * ability to trace, every request, and simple request
 *
 * --how to enable it---
 * code nust import the aws x-ray sdk
 * install the -ray demon or enable x-ray aws integration
 *
 * --concepts---
 * segments==> each app/service will send them
 * subsigments==> if we need more details in our sigment
 * trace: srgemtns collected together to form an end to end trace
 * sampling: decrease the amount of requests sent to x-ray, reduce cost
 * annotations: key value pair used to index traces and use to filter
 * metadata: key value pairs, not indexed, not used for searching
 *
 * --custom sampling rules---
 * use to to create own rules to filter tacking requests to reduce cost
 *
 * --apis---'
 * put==>
 * putTraceSegments
 * PutTemplateryRecords
 * GetSamplingRules
 * GetSamplingTargets
 * getSamplingStatisticSummaries
 * get==>
 *
 *
 */
