/**
 * Several of the prebuilt models are trained on specific form types:
 * ==> invoice model
 * ==> receipt model
 * ==> w2 tax form model
 * ==> ID document model
 * ==> business card model
 * ==> health insurance card model
 * ==> marriage certificate model
 * ==> credit card model
 * ==> driver's license model
 * ==> payslip model
 * ==> bank statement model
 * ==> check model
 * 
 * The other models are designed to extract values from documents with less specific structures:
 * ==> read model
 * ==> general document model
 * ==> layout model
 */

/**
 * Features of prebuilt models
 * ==> Text extraction.: 
 * ==> Key-value pair extraction:  For example, a typical key might be Weight and its value might be 31 kg.
 * ==> entity extraction: Entity types include people, locations, and dates.
 * ==> Selection marks: For example, checkboxes and radio buttons.
 * ==> Tables: Extracted as a list of rows and columns.
 * ==> Fields: or example, the Invoice model includes CustomerName and InvoiceTotal fields.
 */

/**
 * Input requirements
 * ==> The file must be in JPEG, PNG, BMP, TIFF, or PDF format. Additionally, the Read model can accept Microsoft Office files.
 * ==> the file must be smaller than 500 MB for the standard tier, and 4 MB for the free tier.
 * ==> Images must have dimensions between 50 x 50 pixels and 10,000 x 10,000 pixels.
 * ==> PDF documents must have dimensions less than 17 x 17 inches or A3 paper size.
 * ==> PDF documents must not be protected with a password.
 */

/**
 * Azure AI Document Intelligence Studio
 * 
 */

/**
 * Calling prebuilt models by using APIs
 * ==> The service endpoint
 * ==> The API key.
 */