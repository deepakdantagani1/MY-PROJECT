/**
 * table cleanup ==> best opetion is to drop table + recreate table
 * coping tables ==> using data pipeline, where it uses EMR cluster to trasfer data s3 and copy back to new table
 *                ==> backup and restore into a new table (time taking)
 *                ==> scan + putitems + batch writing ( not efficient)
 */
