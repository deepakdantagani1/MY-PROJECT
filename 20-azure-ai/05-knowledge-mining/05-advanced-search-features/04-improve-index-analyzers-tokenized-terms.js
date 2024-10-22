/**
 * In Azure AI Search, analyzers are used to process and transform text into tokens, which helps build a more efficient and 
 * relevant index for search queries. By default, Azure AI Search uses the Lucene analyzer, but sometimes you might need to define a 
 * custom analyzer to handle specialized or unique fields in your data.
 */

/**
 * You can specify a custom analyzer for both indexing and searching fields. For example, use a different analyzer for when the text is 
 * indexed versus when it’s searched. This can be useful when you want to treat text differently at these two stages 
 * (e.g., one for tokenizing input during indexing and another for processing search queries).
 */

/**
 * How Analyzers Work?
 * When text is added to the search index, analyzers break down the text into smaller parts, or tokens, that are indexed to allow 
 * for more efficient and accurate searches. This process involves several steps:
 * 
 * ==> Tokenization
 * ==> removal of stop words
 * ==> stemming/lemmatization (ex: running -> run)
 */

/**
 * Why Create Custom Analyzers?
 * The default analyzer works well for most scenarios, but when you're dealing with unique fields like product codes, specific languages, 
 * or specialized formats (e.g., email addresses or postal codes), a custom analyzer gives you more control over how text is processed.
 */

/**
 * Components of a Custom Analyzer. 
 * ==> Character Filters: ex: remove HTML tags or special characters
 * ==> Tokenizer: ex: split text into words or phrases
 * ==> Token Filters: ex: remove stop words or apply stemming
 */

/**
 * Example Custom Analyzer:
 * Suppose you're building an index for a travel website with a field that stores descriptions in Icelandic. You want to:
 * ==> Strip out HTML tags
 * ==> Tokenize the text according to Icelandic grammar
 * ==> Remove apostrophes and hyphens
 */

/**
 * "analyzers": [
  {
    "name": "ContosoAnalyzer",
    "@odata.type": "#Microsoft.Azure.Search.CustomAnalyzer",
    "charFilters": [
      "WebContentRemover"
    ],
    "tokenizer": "IcelandicTokenizer",
    "tokenFilters": [
      "ApostropheFilter"
    ]
  }
],
"charFilters": [
  {
    "name": "WebContentRemover",
    "@odata.type": "#html_strip"
  }
],
"tokenizers": [
  {
    "name": "IcelandicTokenizer",
    "@odata.type": "#microsoft_language_tokenizer",
    "language": "icelandic",
    "isSearchTokenizer": false
  }
],
"tokenFilters": [
  {
    "name": "ApostropheFilter",
    "@odata.type": "#apostrophe"
  }
]

 */