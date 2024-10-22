/**
 * Inline Fragments in GraphQL are used to apply a set of fields to a specific type within a union or interface.
 * They allow you to define and request different sets of fields for different types in a single query.
 * Inline Fragments are useful when you have a field that returns a union or interface type and you want
 * to request specific fields based on the concrete type returned.
 */

//query
// query HeroForEpisode($ep: Episode!) {
//   hero(episode: $ep) {
//     name
//     ... on Droid {
//       primaryFunction
//     }
//     ... on Human {
//       height
//     }
//   }
// }

//response
// {
//   "data": {
//     "hero": {
//       "name": "R2-D2",
//       "primaryFunction": "Astromech"
//     }
//   }
// }

//query veriables
// {  "ep": "JEDI" }
