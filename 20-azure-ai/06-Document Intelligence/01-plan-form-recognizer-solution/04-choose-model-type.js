/**
 * Prebuilt models
 * ==> read
 * ==> General document ==> Use this model to extract key-value pairs and tables in your documents.
 * ==> Layout
 */

/**
 * General document analysis models
 * Invoice
 * Receipt
 * w2 tax form
 * ID document
 * Business card
 * Health insurance card
 */

/**
 * Custom models
 * ==> Custom template models : A custom template model is most appropriate when the forms you want to analyze have a 
 * consistent visual template
 * ==> Custom neural model :A custom neural model can work across the spectrum of structured to unstructured documents
 * Try using the custom neural model first if your scenario is addressed by the model.
 */

/**
 * Composed models
 * A composed model is one that consists of multiple custom models. Typical scenarios where composed models help are when you don't
 *  know the submitted document type and want to classify and then analyze it. They are also useful if you have multiple variations 
 * of a form, each with a trained individual model. When a user submits a form to the composed model, Document Intelligence 
 * automatically classifies it to determine which of the custom models should be used in its analysis.
 */