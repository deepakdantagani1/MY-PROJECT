/**
 * optical character recognition (OCR)
 * one in the Azure AI Vision Service
 * AI Document Intelligence
 */

/**
 * Azure's AI Vision service uses algorithms to process images and return information. This module teaches you how to 
 * use the Image Analysis API for optical character recognition (OCR).
 * 
 * OCR allows you to extract text from images, such as photos of street signs and products, as well as from documents — 
 * such as handwritten or unstructured documents.
 */

/**
 * Azure AI provides two different features that read text from documents and images, one in the Azure AI Vision Service, the other in Azure AI Document Intelligence. There is overlap in what each service provides, however each is optimized for results depending on what the input is.

Image Analysis Optical character recognition (OCR):
Use this feature for general, unstructured documents with smaller amount of text, or images that contain text.
Results are returned immediately (synchronous) from a single API call.
Has functionality for analyzing images past extracting text, including object detection, describing or categorizing an image, generating smart-cropped thumbnails and more.
Examples include: street signs, handwritten notes, and store signs.
Document Intelligence:
Use this service to read small to large volumes of text from images and PDF documents.
This service uses context and structure of the document to improve accuracy.
The initial function call returns an asynchronous operation ID, which must be used in a subsequent call to retrieve the results.
Examples include: receipts, articles, and invoices.
 */

/**
 * To make an OCR request to ImageAnalysis, specify the visual feature as READ.
 * 
 * {
    "metadata":
    {
        "width": 500,
        "height": 430
    },
    "readResult":
    {
        "blocks":
        [
            {
                "lines":
                [
                    {
                        "text": "Hello World!",
                        "boundingPolygon":
                        [
                            {"x":251,"y":265},
                            {"x":673,"y":260},
                            {"x":674,"y":308},
                            {"x":252,"y":318}
                        ],
                        "words":
                        [
                            {
                                "text":"Hello",
                                "boundingPolygon":
                                [
                                    {"x":252,"y":267},
                                    {"x":307,"y":265},
                                    {"x":307,"y":318},
                                    {"x":253,"y":318}
                                ],
                            "confidence":0.996
                            },
                            {
                                "text":"World!",
                                "boundingPolygon":
                                [
                                    {"x":318,"y":264},
                                    {"x":386,"y":263},
                                    {"x":387,"y":316},
                                    {"x":319,"y":318}
                                ],
                                "confidence":0.99
                            }
                        ]
                    },
                ]
            }
        ]
    }
}
 */

