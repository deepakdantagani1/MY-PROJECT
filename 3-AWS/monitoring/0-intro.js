/**
 *
 * ==> A company wants to monitor all traffic to a network interface on their bastion host. They wish to be alerted if there are more than 10 attempts to connect to the host via SSH within a one-hour time interval. What solution can the company employ to meet this requirement?
 * ==> enables detaild monitoring is a paid offering and is disabled by default. When enabled, the EC2 instance's metrics are available in 1-minute periods.
 * ==> High-Resolution Custom Metrics can have a minimum resolution of 1 secound
 * ==> If you set an alarm on a high-resolution metric, you can specify a high-resolution alarm with a period of 10 seconds or 30 seconds, or you can set a regular alarm with a period of any multiple of 60 seconds.
 * ==> to detect unusual activity in your AWS Account? cloudTrailInsights
 * ==> set-alarm-state ==> Temporarily sets the state of an alarm for testing purposes
 * ==> PutMatricData ==> API call allows you to push custom metric data to CloudWatch
 * ==> By default, all logs stored in CloudWatch Logs never expires
 * ==> A log stream is a sequence of log events that share the same source. Each separate source of logs in CloudWatch Logs makes up a separate log stream.
 * A log group is a group of log streams that share the same retention, monitoring, and access control settings
 * ==> x-ray running in instance vs running by unsong ALB or other services
 * ==> x-ray annotation vs metadata
 * ==> By default, the X-Ray SDK records the first request .........secound........., and ........5%.......... of any additional requests.
 *
 *
 * ---cloudwatch---
 * martics
 * logs
 * events
 * alarms
 *
 * ---aws xray---
 * troubleshooting application performance and errors
 * distributed tracing of microservices
 *
 * ---cloudtrail---
 * internal monitoring of api calls being made
 * audit changes to AWS resources by users
 */
