/**
 * Security::
 * user based:
 * ==> IAM policies: with API calls should be allowed for a specific user from IAM console
 *
 * Resource based:
 * ==> bucket polocies - buckets wide rules from s3 console - allows cross accpit
 * ==> object access control list (ACL) - finer grain
 * ==> bucket access control list (ACL) - less common
 *
 * Note: an IAM principle can be access an s3 object if
 * ==> the user IAM permission allow it or the resource plocy ALOOWS it
 * ==> and there no explicit deny
 *
 * Policies::
 * JSON based pllicies:
 * ==> resources: buckets and objects
 *
 *
 *
 *
 *
 *
 *
 *
 *  ????????????
 */
