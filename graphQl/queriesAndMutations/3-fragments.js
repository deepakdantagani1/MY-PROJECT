/**
 * Fragments in GraphQL are a reusable piece of a query that can be used across multiple queries or
 * within the same query to avoid repeating the same fields. Fragments allow you to keep your
 *  queries DRY (Don't Repeat Yourself) and improve maintainability.
 */

// example
// {
//     luke: human(id: "1000") {
//         ...humanDetails
//     }
//     vader: human(id: "1001") {
//         ...humanDetails
//     }
// }
//
// fragment humanDetails on Human {
//     name
//     height(unit: FOOT)
// }
