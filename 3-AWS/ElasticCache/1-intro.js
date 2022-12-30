/**
 * ==> elastic cache makes it easy to deploy, operate, and sclae an in memory cache in the cloid
 * ==> designed to inprove DB performance
 * ==> great for read heavy database workloads
 * ==> used to save session data fordistributed applications
 *
 * --types of cache---
 * ==> memcached ==> good for basic object caching. It scales horizontally, but there is no persistence,
 * multi az or failovers. Good choise if we want to do basic caching and want cache model to be simple as possible
 * ==> redis ==> more sophisticated solution with enterprise features like persistence,
 * replications, multi-az and failover. Supports sorting and ranking data, and complexdatatupes like list and hashes
 *
 * --when to use--
 * ==> when database is read heavy and not pron to frequent changes
 *
 *
 *
 */
