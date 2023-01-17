/**
 * ---security---
 * VPC endpoints are availabel to access DynamoDB without using the internet
 *
 * ---global tables ---
 * this is done by enabeling streaming options
 *
 * ---fine grain access control --
 * get temporary credentiasl to access DB
 * we can assign an IAM role to these users with a condition to limit these APIs access to DynamoDb
 */
