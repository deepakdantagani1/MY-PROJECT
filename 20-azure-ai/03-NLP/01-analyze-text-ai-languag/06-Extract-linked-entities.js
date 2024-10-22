/**
 * Extract linked entities
 * ==> Entity linking can be used to disambiguate entities of the same name by referencing an article in a knowledge base. 
 * Wikipedia provides the knowledge base for the Text Analytics service. Specific article links are determined 
 * based on entity context within the text.
 * ==> 
 */

/**
 * As with all Azure AI Language service functions, you can submit one or more documents for analysis:
 */

// {
//     "kind": "EntityLinking",
//     "parameters": {
//       "modelVersion": "latest"
//     },
//     "analysisInput": {
//       "documents": [
//         {
//           "id": "1",
//           "language": "en",
//           "text": "I saw Venus shining in the sky"
//         }
//       ]
//     }
//   }

/**
 * The response includes the entities identified in the text along with links to associated articles:
 */
// {
//     "kind": "EntityLinkingResults",
//     "results": {
//       "documents": [
//         {
//           "id": "1",
//           "entities": [
//             {
//               "bingId": "89253af3-5b63-e620-9227-f839138139f6",
//               "name": "Venus",
//               "matches": [
//                 {
//                   "text": "Venus",
//                   "offset": 6,
//                   "length": 5,
//                   "confidenceScore": 0.01
//                 }
//               ],
//               "language": "en",
//               "id": "Venus",
//               "url": "https://en.wikipedia.org/wiki/Venus",
//               "dataSource": "Wikipedia"
//             }
//           ],
//           "warnings": []
//         }
//       ],
//       "errors": [],
//       "modelVersion": "2021-06-01"
//     }
//   }