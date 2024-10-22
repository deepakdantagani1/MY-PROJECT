/**
 * Understand composed models
 * 
 * You can create custom models of two types:
 * ==> Custom template models
 * ==> Custom neural models
 * 
 * 
 */

/**
 * Using Composed models
 * 
 * Once you've created a set of custom models, you must assemble them into a composed model. You can do 
 * this in a Graphical User Interface (GUI) by using Azure AI Document Intelligence Studio, or by using the 
 * StartCreateComposedModelAsync() method in custom code.
 */

/**
 * The maximum number of custom models that can be added to a single composed model is 100.
 */

/**
 * Custom model compatibility
 * 
 * ==> Custom template models are composable with other custom template models across 3.0 and 2.1 API versions.
 * ==> Custom neural models are composable with other custom neural models.
 * ==> Custom neural models can't be composed with custom template models
 */