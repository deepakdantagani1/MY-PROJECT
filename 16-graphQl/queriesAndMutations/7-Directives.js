/**
 * Directives in GraphQL are special markers that can be added to a query, mutation, or field definition
 * to change the behavior of the execution. They allow you to conditionally include or skip fields, inline f
 * ragments, or fragments based on variables. Directives can also be used to add custom logic or change the
 * execution of the query on the server-side.
 * In GraphQL, there are two built-in directives: @include and @skip.
 */

// query GetCharactersWithDirectives(
//   $episode: Episode
//   $name: String
//   $includeAge: Boolean!
//   $skipFriends: Boolean!
// ) {
//   characters(episode: $episode, name: $name) {
//     id
//     name
//     age @include(if: $includeAge)
//     episode
//     friends @skip(if: $skipFriends) {
//       id
//       name
//       age
//     }
//   }
// }

// {
//   "episode": "EMPIRE",
//   "name": "Luke Skywalker",
//   "includeAge": true,
//   "skipFriends": false
// }
