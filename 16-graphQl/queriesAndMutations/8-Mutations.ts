/**
 * Mutations in GraphQL allow you to modify data on the server-side.
 * While queries are used to fetch data, mutations are used to create, update, or delete data.
 * Mutations are defined in your GraphQL schema and require a specific type called Mutation.
 */


// type Character {
//   id: ID!
//   name: String!
//   age: Int
//   episode: Episode!
//   friends: [Character]
// }

// input CharacterInput {
//   name: String!
//   age: Int
//   episode: Episode!
//   friends: [ID]
// }

// enum Episode {
//   NEWHOPE
//   EMPIRE
//   JEDI
// }

// type Mutation {
//   createCharacter(input: CharacterInput!): Character
//   updateCharacter(id: ID!, input: CharacterInput!): Character
//   deleteCharacter(id: ID!): Character
// }

// type Query {
//   characters(episode: Episode, name: String): [Character]
//   character(id: ID!): Character
// }


/**
 * query
 */
// mutation CreateAndUpdateCharacter(
//   $createInput: CharacterInput!
//   $updateId: ID!
//   $updateInput: CharacterInput!
// ) {
//   createCharacter(input: $createInput) {
//     id
//     name
//     age
//     episode
//   }
//   updateCharacter(id: $updateId, input: $updateInput) {
//     id
//     name
//     age
//     episode
//   }
// }

//query parameters
// {
//   "createInput": {
//     "name": "Leia Organa",
//     "age": 28,
//     "episode": "EMPIRE"
//   },
//   "updateId": "123",
//   "updateInput": {
//     "name": "Luke Skywalker",
//     "age": 28,
//     "episode": "EMPIRE"
//   }
// }

