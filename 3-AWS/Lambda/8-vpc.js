/**
 * by default lambda is launched outside of VPC
 *
 * https://share.icloud.com/photos/08acypA9yj4qc1ZenpN4UHCKg
 * ---lambda in VPC---
 * we must define VPC ID, the subnets, and security groups
 * lambda will create an ENI (Elastic network interface) in the subnet
 * AWSLambdaVPCAccessExecutionRole
 *
 */
