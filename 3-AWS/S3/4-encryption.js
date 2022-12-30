/**
 * 4 methods of encryption objects in s3
 * ==> SSE-s3: encrypts s3 objects using keys handles and manages by AWS
 * ==> SSE-KMS: leverages AWS key management services to manage encryption keys
 * ==> SSE-C: when want to maange our own encrytopn keys
 * ==> client side encryptions
 *
 * SSE-S3:
 * Encryption using keys handles and managed by Amazon s3
 * Objects is encrypted server side
 * AES-256 encryption type
 * must have header: 'x=amz-server-side-encryption':'AES256'
 *
 * SSE-KMS:
 * encryption using keys handles and managed by KMS
 * KMS adventages: user control + audit trail
 * Object is encryped server side
 * must set header: 'x-amz-server-side-encryption':'aws:kms'
 *
 * SSE-C
 * server-side encryption uses data keys fully managed by the customer outside of AWS
 * Amazon s3 does not store the encryption key you provided
 * HTTPS must be used
 * Encryption key must provided in HTTP header for each HTTP request made
 *
 * client side encryption:
 * client liberary such as Amazon s3 encryptio cleint
 * clients must encrypt data themself before sending to s3
 * cleints must decrypt data themself when retriving from s3
 * customer fully manages the keys ans encryotion cycle
 *
 * Encryption in transit:(ssl/tls)
 * Amazon s3 exposes:
 * ==> http end point : non encrypted
 * ==> https endpoint : encryption in flight
 * free to use the endpoint we want, but https is recommended
 * most clients would use the https end point by default
 * Https is mandatory fir SSE-c
 * encryption in flight os also called ssl/tls
 *
 */
