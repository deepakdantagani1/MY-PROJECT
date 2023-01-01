/**
 *
 * https://share.icloud.com/photos/077vOsae3jEkU-eNOKPtnhvUQ
 *
 * s3 types are depends on the DURABILITY and AVAILABILITY
 *
 * -- s3 standard--
 * ==> high availability and durability
 * ==> designed for frequent access data
 * ==> sutable for most workload
 *
 *
 * -- s3 standard infrequest access (s3-IA) --
 * ==> designed for infrequently access data
 * ==> rapid access
 * ==> pay to access the data
 *
 * -- s3 one zone infrequent access ---
 * ==> cost affective
 * ==> longlived, infrequent, non-critical data
 *
 * -- Gracier instant, glacier flexible(3 to 5 hours for standard) and glacier deep archive --
 * ==> cheap, data that is very infrequently accessed
 * ==> pay each time we access data
 * ==> only used for archiving data
 * ==> glacier provides, long term data archiving with retrival time range from 1 min to 12 hours
 * eg, historical data only accessed a few times per year. 90 days min
 * ==> Gracier deep archite, archives, that rarely accessed data with default retrival time of 12 hours
 * eg, financial records that may be accessed once or twice per year. 180 days min
 *
 * -- s3 intelligent tiering --
 * ==> automatically moves data to the most cost-effective tire based on how frequient we access each object
 *
 *
 *
 *
 */
