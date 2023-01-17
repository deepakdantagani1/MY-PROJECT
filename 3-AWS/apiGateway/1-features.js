/**
 * gateway + labda ==> no infra to mamage
 * support for the web socket protocal (chatting, gaming)
 * handle api versioning
 * handle different environments
 * handles security
 * create api keys
 * handle throtteling
 * swagger, openapi to import quickly difne apis
 * transform and validate request and response
 * generate SDK and api specifications
 * cache api response
 *
 * ==> we can expose and AWS service to the API gateway
 * ---intigrations---
 * lambda, http, aws services
 *
 * ---types---
 * edge-optimized(default): for global clients ==> req are routed through the cloudfront edge locations(improve latency)
 *                                 reginal     ==> for clinet with in same region, could manually combine with cloudfront
 *                                  private    ==> can only be accessed from the VPC using an interface VPC endpoint
 * --security---
 * user auth theough, IAM role(useful for internal application), congnito(identity for external users - example mobile users)
 *                  custom auth, own logic
 * HTTPS, if using edge optimization endpoint, then certificate must be in the US-EAST-1
 *        if usinng reginal end point, the certification must be in the API gateway region
 *        must setup CNAME or a-alies name record in the route 53
 *
 */
