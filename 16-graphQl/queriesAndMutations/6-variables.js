/**
 *  variables are a way to parameterize your queries and mutations,
 *  making them more dynamic and reusable. Variables are useful when you want to reuse a query or mutation
 *  with different input values, or when you want to avoid constructing complex query strings by concatenating
 *  values directly.
 */

// complex examle
// query HeroNameAndFriends($episode: Episode) {
//   hero(episode: $episode) {
//     name
//     friends {
//       name
//     }
//   }
// }

// query GetCharactersByEpisodeAndName(
//   $episode: Episode
//   $name: String
//   $friendsLimit: Int
// ) {
//   characters(episode: $episode, name: $name) {
//     id
//     name
//     age
//     episode
//     friends(first: $friendsLimit) {
//       id
//       name
//       age
//     }
//   }
// }

// {
//   "episode": "EMPIRE",
//   "name": "Luke Skywalker",
//   "friendsLimit": 2
// }
