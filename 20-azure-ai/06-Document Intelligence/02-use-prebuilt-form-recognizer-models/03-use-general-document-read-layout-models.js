/**
 * Using the read model
 * ==> The read model is ideal if you want to extract words and lines from documents with no fixed or predictable structure.
 */

/**
 * Using the general document model
 * ==>The general document model is the only prebuilt model to support entity extraction. It can recognize entities such as people, 
 * organizations, and dates and it runs against the whole document, not just key-value pairs.
 * 
 * The types of entities you can detect include:
 * ==> Person
 * ==> person type
 * ==> Location
 * ==> Organization
 * ==> event
 * ==> product
 * ==> skill
 * ==> phone number
 * ==> address
 * ==> email
 * ==> url
 * ==> Ip address
 * ==> datetime
 * ==> quantity
 */

/**
 * Using the layout model
 * 
 * As well as extracting text, the layout model returns selection marks and tables from the input image or PDF file. 
 * It's a good model to use when you need rich information about the structure of a document.
 * 
 * For example, each table cell is extracted with:
 * ==> The text in the cell
 * ==> The bounding box of the cell
 * ==> The row index
 * ==> The column index
 */