/**
 * Aliases in GraphQL allow you to rename the result of a field to a custom name.
 * This can be useful when you want to query the same field with different arguments and avoid having a naming
 * conflict in the response
 */

// example
// {
//     luke: human(id: "1000") {
//         name
//         height(unit: FOOT)
//     }
//     vader: human(id: "1001") {
//         name
//         height(unit: FOOT)
//     }
// }
