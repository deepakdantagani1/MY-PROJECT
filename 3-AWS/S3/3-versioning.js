/**
 * we can version files in Amazon s3
 * it is enabled at the bucket leel
 * same key overwrite with increment the version: 1,2,3
 * it is best practice to version buckets
 * ==> protects againest unintended feletes (ability to restore a version)
 * ==> easy roll back to pervious versions
 * Notes:
 * ==> any file is not versioned prior to enabiling versioning will have version null
 * suspending versioning does not delete the pervoius versions
 */
