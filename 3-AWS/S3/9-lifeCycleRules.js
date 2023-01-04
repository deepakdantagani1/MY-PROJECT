/**
 * this is to move objects for one storage class to another
 *
 * ---types---
 * ==> transition action
 * ==> expiration action
 *
 * example:
 * For example, you have an application on EC2 and it creates images thumbnails,after profile photos are uploaded to Amazon S3.
 * But these thumbnails, they can be easily recreated from the original photo and they only need to be kept for 60 days.
 * But the source images, they should be able to be immediately retrieved for these 60 days, and afterwards the user can wait up to six hours.
 * So how would you design this?
 *
 * solution: So the S3 source images can be under Standard Class, with a Lifecycle configuration, to transition them
 * to Glacier after 60 days
 *
 * So the thumbnails can be on One Zone IA because, while they are infrequently accessed and they can be recreated easily, and you can have a life
 * cycle configuration to expire them, or delete them after 60 days.
 */
