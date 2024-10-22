/**
 * Extract entities from text
 * 
 * Named Entity Recognition identifies entities that are mentioned in the text. Entities are grouped into categories and subcategories, for example:
 * Person
 * Location
 * DateTime
 * Organization
 * Address
 * Email
 * URL
 */

/**
 * Input for entity recognition is similar to input for other Azure AI Language API functions:
 */
// {
//     "kind": "EntityRecognition",
//     "parameters": {
//       "modelVersion": "latest"
//     },
//     "analysisInput": {
//       "documents": [
//         {
//           "id": "1",
//           "language": "en",
//           "text": "Joe went to London on Saturday"
//         }
//       ]
//     }
//   }

/**
 * The response includes a list of categorized entities found in each document:
 */
// {
//     "kind": "EntityRecognitionResults",
//      "results": {
//           "documents":[
//               {
//                   "entities":[
//                   {
//                     "text":"Joe",
//                     "category":"Person",
//                     "offset":0,
//                     "length":3,
//                     "confidenceScore":0.62
//                   },
//                   {
//                     "text":"London",
//                     "category":"Location",
//                     "subcategory":"GPE",
//                     "offset":12,
//                     "length":6,
//                     "confidenceScore":0.88
//                   },
//                   {
//                     "text":"Saturday",
//                     "category":"DateTime",
//                     "subcategory":"Date",
//                     "offset":22,
//                     "length":8,
//                     "confidenceScore":0.8
//                   }
//                 ],
//                 "id":"1",
//                 "warnings":[]
//               }
//           ],
//           "errors":[],
//           "modelVersion":"2021-01-15"
//     }
// }