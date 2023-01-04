/**
 * important.
 * ----serverside encryption----
 * sse-s3   ==> encryption using keys handled, amanaged and owned by aws
 *          ==> object is encrypted server side
 *          ==> encryption type is ASE-256
 *          ==> must set header "x-amz-server-side-encryption":"AES256"
 * sse-kms  ==> encryotion keys managed by AWS KMS
 *          ==> adventages are user controla nd alos audit keys using cloutTrail
 *          ==> must set header to "x-amz-server-side-encryption":"aws:kms"
 *          ==> limitions are needs another additional requests to KMS services.
 *          ==> 5500, 10000, 30000 req/s based on the region
 */
