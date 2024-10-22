/**
 * ==> prebuild models
 * ==> custom models
 * ==> composed models
 * ==> extract data from forms
 * ==> form recognizer custom skill for Azure Cognitive Search
 */

/**
 * prebuild models
 * ==> read : extract words and lines from documents with no fixed or predictable structure.
 * ==> general document : Invoice, Receipt, w2 tax form, ID document, Business card, Health insurance
 * ==> Layout : s well as extracting text, the layout model returns selection marks and tables from the input image or PDF file. 
 * 
 * features of prebuild models
 * ==> Text extraction
 * ==> Key-value pair extraction
 * ==> entity extraction
 * ==> Selection marks
 * ==> Tables
 * ==> Fields
 * 
 * input requirements
 * ==> The file must be in JPEG, PNG, BMP, TIFF, or PDF format. Additionally, the Read model can accept Microsoft Office files.
 * ==> the file must be smaller than 500 MB for the standard tier, and 4 MB for the free tier.
 * ==> Images must have dimensions between 50 x 50 pixels and 10,000 x 10,000 pixels.
 * ==> PDF documents must have dimensions less than 17 x 17 inches or A3 paper size.
 * ==> PDF documents must not be protected with a password.
 * 
 * calling prebuild models by using APIs
 * ==> The service endpoint
 * ==> The API key.
 */

/**
 * Custom models
 * ==> Custom template models : A custom template model is most appropriate when the forms you want to analyze have a 
 * consistent visual template
 * ==> Custom neural model :A custom neural model can work across the spectrum of structured to unstructured documents
 * Try using the custom neural model first if your scenario is addressed by the model.
 * 
 * To train a custom model:
 * ==> Store sample forms in an Azure blob container, along with JSON files containing layout and label field information.
 * ==> Generate a shared access security (SAS) URL for the container.
 * ==> Use the Build model REST API function (or equivalent SDK method).
 * ==> Use the Get model REST API function (or equivalent SDK method) to get the trained model ID.
 */

/**
 * Composed models
 * A composed model is one that consists of multiple custom models. Typical scenarios where composed models help are when you don't
 *  know the submitted document type and want to classify and then analyze it. They are also useful if you have multiple variations 
 * of a form, each with a trained individual model. When a user submits a form to the composed model, Document Intelligence 
 * automatically classifies it to determine which of the custom models should be used in its analysis.
 * 
 * Custom model compatibility
 * ==> The maximum number of custom models that can be added to a single composed model is 100.
 * ==> Custom template models are composable with other custom template models across 3.0 and 2.1 API versions.
 * ==> Custom neural models are composable with other custom neural models.
 * ==> Custom neural models can't be composed with custom template models.
 * 
 * Composed models setup
 * once you've created a set of custom models, you must assemble them into a composed model. You can do this in a Graphical User Interface
 * (GUI) by using Azure AI Document Intelligence Studio, or by using the StartCreateComposedModelAsync() method in custom code.
 * 
 * docType : The docType parameter is a string that represents the type of document that the model is trained to recognize.
 * 
 */

/**
 * Azure AI Document Intelligence and Azure AI Vision
 * ==> If you want to extract simple words and text from a picture of a form or document, without contextual information, 
 * Azure AI Vision OCR is an appropriate service to consider.
 * 
 * ==> If you want to deploy a complete document analysis solution that enables users to both extract and understand text, 
 * consider Azure AI Document Intelligence.
 * ?
 * ?
 * ?
 * ?
 * ?
 * ?
 * ?
 * ?
 */
