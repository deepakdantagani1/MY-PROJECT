/**
 * ==> Key phrase extraction is the process of evaluating the text of a document, or documents, and then identifying 
 * the main points around the context of the document(s).
 * ==> As with language detection, the REST interface enables you to submit one or more documents for analysis.
 */

/**
 * As with language detection, the REST interface enables you to submit one or more documents for analysis.
 */
// {
//     "kind": "KeyPhraseExtraction",
//     "parameters": {
//         "modelVersion": "latest"
//     },
//     "analysisInput":{
//         "documents":[
//             {
//               "id": "1",
//               "language": "en",
//               "text": "You must be the change you wish 
//                        to see in the world."
//             },
//             {
//               "id": "2",
//               "language": "en",
//               "text": "The journey of a thousand miles 
//                        begins with a single step."
//             }
//         ]
//     }
// }


/**
 * The response contains a list of key phrases detected in each document:
 */
// {
//     "kind": "KeyPhraseExtractionResults",
//     "results": {
//     "documents": [   
//         {
//          "id": "1",
//          "keyPhrases": [
//            "change",
//            "world"
//          ],
//          "warnings": []
//        },
//        {
//          "id": "2",
//          "keyPhrases": [
//            "miles",
//            "single step",
//            "journey"
//          ],
//          "warnings": []
//        }
// ],
//     "errors": [],
//     "modelVersion": "2021-06-01"
//     }
// }