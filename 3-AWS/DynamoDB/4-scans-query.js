/**
 * ---query---
 * query finds items ina a table based on the primary key attribute and a distinct value to search for
 * use an optional sort key name and value to refine the results
 * use the PojectionExpression if we want to return only specific attributes
 * to get sorting order in reverse we can use ScanIndexForward paramater to false
 *
 * ---scan---
 * a scan operation examines every item in the table. By default it returns all data attributes
 * we can use PojectionExpression if we want to return only specific attributes
 *
 *
 * ---improve performace---
 * avoide scans
 * use parallel scans in dyanamodDB config (default is sequential). Best to avaide this if table or index is incurring heavy reads or rights
 * isolate scans operations to specific tables and segregate them from  your mission critical traffic, even if writing data to two different tables
 *
 *
 *
 */
