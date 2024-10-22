/**
 * *****difference AI vision and face service****
 */


/**
 * Identify options for face detection analysis and identification
 * 
 * ==> The Azure AI Vision service
 * The Azure AI Vision service enables you to detect people in an image, as well as returning a bounding box for its location.
 * 
 * ==> The Azure AI Face service
 * The Face service offers more comprehensive facial analysis capabilities than the Azure AI Vision service, including:
 * Face detection (with bounding box).
 * Comprehensive facial feature analysis (including head pose, presence of spectacles, blur, facial landmarks, occlusion and others).
 * Face comparison and verification.
 * Facial recognition.
 * 
 */

/**
 * Understand considerations for face analysis
 * 
 * ==> data privacy and security
 * ==> Transparency
 * ==> Fairness and inclusiveness
 */

/**
 * Detect faces with the Azure AI Vision service
 * To detect and analyze faces with the Azure AI Vision service, call the *****Analyze Image function*****
 * (SDK or equivalent REST method), specifying People as one of the visual features to be returned.
 * In images that contain one or more people, the response includes details of their location in the image and the attributes of the detected person, like this:
 * 
 * 
 * { 
  "modelVersion": "2023-10-01",
  "metadata": {
    "width": 400,
    "height": 600
  },
  "peopleResult": {
    "values": [
      {
        "boundingBox": {
          "x": 0,
          "y": 56,
          "w": 101,
          "h": 189
        },
        "confidence": 0.9474349617958069
      },
      {
        "boundingBox": {
          "x": 402,
          "y": 96,
          "w": 124,
          "h": 156
        },
        "confidence": 0.9310565276194865
      },
    ...
    ]
  }
}
 */


/**
 * Understand capabilities of the face service
 * 
 * ==> Face detection
 * ==> Face attribute analysis (head pose, presence of spectacles, blur, facial landmarks, occlusion, etc.)
 * ==> Facial landmark location
 * ==> Face comparison
 * ==> Facial recognition
 * ==> Facial liveness
 */

/**
 * Compare and match detected faces
 */