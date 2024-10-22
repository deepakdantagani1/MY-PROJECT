/**
 *  Azure AI Vision service is designed to help you extract information from images
 * ==> Description and tag generation 
 * ==> Object detection
 * ==> People detection
 * ==> Category identification
 * ==> Background removal 
 * ==> Optical character recognition (OCR)
 * ==> Smart thumbnail generation
 */

/**
 * import ImageAnalysisClient form azure.ai.vision.imageanalysis
 * import VisualFeatures from azure.ai.vision.imageanalysis.models
 * 
 * create a ImageAnalysisClient using AzureKeyCredential key and endpoint
 * then define VisualFeatures to extract information from images
 * 
 * VisualFeatures.TAGS: Identifies tags about the image, including objects, scenery, setting, and actions
 * VisualFeatures.OBJECTS: Returns the bounding box for each detected object
 * VisualFeatures.CAPTION: Generates a caption of the image in natural language
 * VisualFeatures.DENSE_CAPTIONS: Generates more detailed captions for the objects detected
 * VisualFeatures.PEOPLE: Returns the bounding box for detected people
 * VisualFeatures.SMART_CROPS: Returns the bounding box of the specified aspect ratio for the area of interest
 * VisualFeatures.READ: Extracts readable text
 * 
 * sample response: 
 * {
  "apim-request-id": "abcde-1234-5678-9012-f1g2h3i4j5k6",
  "modelVersion": "<version>",
  "denseCaptionsResult": {
    "values": [
      {
        "text": "a house in the woods",
        "confidence": 0.7055229544639587,
        "boundingBox": {
          "x": 0,
          "y": 0,
          "w": 640,
          "h": 640
        }
      },
      {
        "text": "a trailer with a door and windows",
        "confidence": 0.6675070524215698,
        "boundingBox": {
          "x": 214,
          "y": 434,
          "w": 154,
          "h": 108
        }
      }
    ]
  },
  "metadata": {
    "width": 640,
    "height": 640
  }
}
 */