/**
 * Language detection
 * ==> The Azure AI Language detection API evaluates text input and, for each document submitted, returns language identifiers 
 * with a score indicating the strength of the analysis.
 * ==> confidence of the model (a value between 0 and 1).
 * ==> Language detection can work with documents or single phrases. It's important to note that the document size must be 
 * under 5,120 characters. The size limit is per document and each collection is restricted to 1,000 items (IDs)
 * ==> Optionally, you can provide a countryHint to improve prediction performance.
 * ==> If you pass in a document that has multilingual content, the service will behave a bit differently. 
 * Mixed language content within the same document returns the language with the largest representation 
 * in the content, but with a lower positive rating, reflecting the marginal strength of that assessment
 * ==> if you submit textual content that the analyzer is not able to parse, for example because of character encoding 
 * issues when converting the text to a string variable. As a result, the response for the language name and 
 * ISO code will indicate (unknown) and the score value will be returned as 0
 * 
 * sample payload:
 * {
//     "kind": "LanguageDetection",
//     "parameters": {
//         "modelVersion": "latest"
//     },
//     "analysisInput":{
//         "documents":[
//               {
//                 "id": "1",
//                 "text": "Hello world",
//                 "countryHint": "US"
//               },
//               {
//                 "id": "2",
//                 "text": "Bonjour tout le monde"
//               }
//         ]
//     }
 * }
 * 
 * 
 * sample response payload:
 * 
 * {   "kind": "LanguageDetectionResults",
//     "results": {
//         "documents": [
//           {
//             "detectedLanguage": {
//               "confidenceScore": 1,
//               "iso6391Name": "en",
//               "name": "English"
//             },
//             "id": "1",
//             "warnings": []
//           },
//           {
//             "detectedLanguage": {
//               "confidenceScore": 1,
//               "iso6391Name": "fr",
//               "name": "French"
//             },
//             "id": "2",
//             "warnings": []
//           }
//         ],
//         "errors": [],
//         "modelVersion": "2022-10-01"
//     }
// }
 * 
 * 
 */