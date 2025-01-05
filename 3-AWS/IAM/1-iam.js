/**
 * users, groups, policies, roles, security, access key, audit, permissions
 *
 * identity and access management ==> manage users and their level of access to the aws console.
 *
 * provides
 * ==> centralized control of your aws account
 * ==> shred access to aws account
 * ==> granular permissions(enable to give different level of access to different users within org)
 * ==> identity federation
 * ==> allows multi factor auth
 * ==> provides temp access
 * ==> allows to septup own password rotation policy
 * ==> intigrate with many different aws services
 * ==> supports Payment Card Industry Data Security Standard conpliances
 *
 * whole AWS security is aroung ==> users, groups and roles
 * --ROLE--
 * we can create roles and can then assign them to users, applications, and services to give access to AWS services
 * --POLICY--
 * a document that defines one or more permissions
 * --GROUPS--
 * contain users only, but not other groups
 * Managed policies: Policies shared among users and/or groups that are pre-built either by AWS or an administrator within the AWS account. When it's updated, the changes to this policy are immediately applied for all users and groups to which it's attached.
 * Inline policies: Policies assigned to just one user or group that are typically used in one-off situations.
 *
 * Root account should never be used (and shared)
 * user must be created with proper permissions
 * IAM is a center of AWS
 * Policies are writtn in JSON
 *
 * users(physical_person) ==> users can be grouped ==> Roles are internal usages within AWS resouces
 * polocies defines what each of the above can and can't do
 *
 * AIM has a global view, not reginal**
 * root accout is the first account that we set up initially, this account will have complete admin access,
 * dont use this day to day activity tasks
 * permissions are growned by polocies(JSON)
 * MFA(Multi factor authetication) can be setup
 * IAM has predefined 'managed polocies'
 * best to give users the minimal amount of persmissions they need to perform their jobs(least previlege principles)
 *
 * one iam user per physical person
 * one iam role per application
 *
 * --security--
 * MFA + password policy
 * --access key---
 * new users are assigned an access key and secret access key when the account is created
 * not for console access
 * can use access keys to access AWS via the api and commandlines
 *
 * --- security tools ---
 * Credentials report (account level) list all account users
 * access advisor (user level) service permisson granted to an user and when were last accessed
 *
 */


// what the difference between users, groups, roles??
