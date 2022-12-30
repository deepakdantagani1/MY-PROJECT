/**
 * S3 allowes people to store objects(files) in 'buckets'(directories)
 *
 * Buckets must have a globally unique name
 *
 * buckets are defined at region level
 *
 * Naming Conventions: No uppercase, no underscore, 3-63 chanrs long, not an ip,  must start with the lowercase letter or number
 *
 * Object (files) have a Key
 *
 * the key, is FULL path: s3://my-bucket/(my_file.txt), s3://my-bucket/(my_folder/another_folder/my_file.txt)
 *
 * the key is conpised of prefix + object name: s3://my-bucket/(my_folder/another_folder)/(my_file.txt)
 *
 * there is no concept of dirs with in buckets(although the UI will trick to thionk otherwise)
 *
 * Just keys with very long names that contains slashes("/")
 *
 * Object values are the content of the body:
 * ==> max object sixe is 5tb(5000GB)
 * ==> if uploaded more than 5gb, must use "muiti part upload"
 *
 * metadata(list of test key/value painrs -sytem or user metadata)
 * tags(unicode key/ valie pair - upto 10) - useful for security/lifecucle
 * Version ID (if versioning is enabled)
 *
 * s3 provides global service *****
 *
 *
 */
