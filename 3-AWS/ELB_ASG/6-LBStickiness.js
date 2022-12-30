/**
 * the same client is alway redirected to the same instance behind a laod balancer
 *
 * this works for the classsic and the applciaiton laod balancers
 *
 * the cookie for the stickiness has an expiration data you caontrol
 * use case: make sure the user does't lose his session data
 *
 * Enabling stickiness may bring imbalance to the laod over the backend EC2 instance
 *
 * steps:
 * ==>we need to add this in the target groups
 * ==> ernable and give a stickyness duration
 */
