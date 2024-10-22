/**
 * Filtering results
 * ==> By including filter criteria in a simple search expression.
 * ==> By providing an OData filter expression as a $filter parameter with a full syntax search expression.
 */

/**
 * filterable : The filterable attribute of a field in an index schema determines whether the field can be used in a filter expression.
 */

/**
 * search=London
    $filter=author eq 'Reviewer'
    queryType=Full
 */

/**
 * Filtering with facets
 * ==> Facets are a useful way to present users with filtering criteria based on field values in a result set
 * Facet Options: The search engine generates facet values based on the available data. For example:
    Brand: Samsung (120 results), Apple (80 results), Sony (30 results)
    Price Range: $0-$50 (10 results), $50-$100 (50 results), $100-$200 (100 results)
 */

/**
 * Sorting results
 * search=*
$orderby=last_modified desc
 */