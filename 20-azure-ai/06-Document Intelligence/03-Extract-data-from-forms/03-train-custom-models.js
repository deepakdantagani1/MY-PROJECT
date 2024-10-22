/**
 * To train a custom model:
 * 
 * ==> Store sample forms in an Azure blob container, along with JSON files containing layout and label field information.
 * Generate a shared access security (SAS) URL for the container.
 * Use the Build model REST API function (or equivalent SDK method).
 * Use the Get model REST API function (or equivalent SDK method) to get the trained model ID.
 * 
 * ===> Azure Document Intelligence Studio to label and train the model.
 * Custom template models || Custom neural models
 */