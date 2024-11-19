/**
 * +-------------------------+
|                         |
| 1. Configure REST API   |
| - Endpoint, API version |
| - API key               |
+-------------------------+
            |
            |
            v
+-------------------------+         +------------------------------------+
|                         |         |                                    |
| 2. Send POST Request    |         |  3. Request Body (JSON Format)     |
|    to REST API          |---------|                                    |
|                         |         | - Define @search.action            |
+-------------------------+         | - Specify document data            |
            |                       |                                    |
            v                       +------------------------------------+
+-------------------------+
|                         |
| 4. Batch Documents      |         +----------------------------+
|    (Optimal: 1,000 docs)|         |                            |
|                         |<--------|  REST API Limitations      |
+-------------------------+         |                            |
            |                       | - Max 1,000 docs or 16 MB  |
            |                       | - Complex objects limited  |
            v                       +----------------------------+
+-------------------------+
|                         |
| 5. Run Upload in .NET   |
|    (Azure SDK)          |
|                         |
+-------------------------+
            |
            |
            v
+-------------------------+
|                         |
| 6. Exponential Backoff  |
|    Retry on Failure     |
|                         |
+-------------------------+
            |
            |
            v
+-------------------------+
|                         |
| 7. Multithread & Scale  |
|    for Performance      |
|                         |
+-------------------------+

 */

/**
 * ### Azure Cognitive Search REST API Indexing – Exam Prep Keywords

---

**General Concepts**
- **REST API**: Flexible data push, JSON-based requests
- **Search API vs Management API**
- **API Requirements**: HTTPS endpoint, API version, API key (Admin key for modifications)

---

**Indexing Operations**
- **Actions**: `upload` (upsert), `merge`, `mergeOrUpload`, `delete`
- **Batch Size Limit**: 1,000 documents OR 16 MB

---

**.NET Core Optimization**
- **Client Library**: Azure.Search.Documents (NuGet)
- **Performance Factors**: Service tier, replicas, index schema complexity, multithreading

---

**Batch Processing**
- **Optimal Batch Size**: Adjust by testing, common range 100-1,000 docs

---

**Exponential Backoff**
- **Error Handling**: Retry on 503 or 207 status
- **Backoff Strategy**: Increase delay on repeated failures

---

**Multithreading**
- **Parallel Uploads**: Use threading (e.g., CPU core count)
- **Latency Reduction**: Run near Azure region for Search index
 */


/**
 * To effectively index data in Azure Cognitive Search using the REST API and .NET Core, we need to understand how to interact with the REST API, handle large-scale data uploads, optimize performance, and manage errors.

Here’s a breakdown of these concepts, followed by an example that simulates exam-style preparation questions, and a text-based flow diagram.

Indexing Data Using the Azure Cognitive Search REST API
Overview of the REST API
The Azure Cognitive Search REST API provides flexibility to index data, with operations available for:

Index: Create, delete, update, and configure indexes.
Document: Add, update, delete, and retrieve documents within an index.
Indexer: Configure data sources and manage indexing schedules.
Skillset: Manage AI enrichment skillsets.
Synonym Map: Manage synonyms for improved search relevance.
To access these endpoints, you need:

HTTPS endpoint: The search service endpoint, found in the Azure portal.
API version: Query parameter in the URL, also available in the portal.
API key: Required for authentication, obtained from the Keys section in the portal. Use admin keys for index modifications and query keys for read-only access.
Steps for Adding Data to an Index
HTTP POST Request: Send a POST request to add documents to the index:

plaintext
Copy code
POST https://[service name].search.windows.net/indexes/[index name]/docs/index?api-version=[api-version]
Request Body Structure: The body specifies actions (upload, merge, mergeOrUpload, delete) and the document data.

upload: Inserts or replaces a document.
merge: Updates existing document fields; fails if the document doesn’t exist.
mergeOrUpload: Combines update and upload operations.
delete: Removes a document by its unique key.
Example JSON body:

json
Copy code
{
  "value": [
    {
      "@search.action": "upload",
      "id": "5fed1b38309495de1bc4f653",
      "firstName": "Sims",
      "lastName": "Arnold",
      "isAlive": false,
      "age": 35,
      "address": {
        "streetAddress": "Sumner Place",
        "city": "Canoochee",
        "state": "Palau",
        "postalCode": "1558"
      },
      "phoneNumbers": [
        {
          "type": "home",
          "number": "+1 (830) 465-2965"
        }
      ]
    }
  ]
}
Batching Requests: For performance, batch documents in a single request (up to 1,000 documents or 16 MB).

Using .NET Core for Optimized Data Indexing
Using .NET Core, we can automate indexing with the Azure.Search.Documents client library, optimizing data uploads through batch processing, threading, and retry strategies.

Key Performance Factors
Service Tier & Replicas: Higher tiers and replicas improve index performance.
Index Complexity: Minimizing searchable, facetable, and sortable properties per field can enhance speed.
Batch Size: The best batch size depends on document size and schema.
Multithreading: Parallel uploads boost throughput.
Error Handling: Use exponential backoff for retry logic.
Data Proximity: Run indexing near the Azure region of the search index to reduce latency.
Example: Batch Processing for Optimal Performance
The following code runs through various batch sizes, measuring performance for each. This helps identify the most efficient batch size.

csharp
Copy code
public static async Task TestBatchSizesAsync(SearchClient searchClient, int min = 100, int max = 1000, int step = 100, int numTries = 3)
{
    Console.WriteLine("Batch Size \t Size in MB \t MB / Doc \t Time (ms) \t MB / Second");
    for (int numDocs = min; numDocs <= max; numDocs += step)
    {
        double sizeInMb = 0.0;
        for (int x = 0; x < numTries; x++)
        {
            List<Hotel> hotels = dg.GetHotels(numDocs, "large");
            DateTime startTime = DateTime.Now;
            await UploadDocumentsAsync(searchClient, hotels);
            DateTime endTime = DateTime.Now;
            sizeInMb = EstimateObjectSize(hotels);
        }

        Console.WriteLine("{0} \t {1} \t {2}", numDocs, Math.Round(sizeInMb, 3), Math.Round(sizeInMb / numDocs, 3));
        Thread.Sleep(2000);
    }
}
Exponential Backoff Retry Strategy
In case of errors, such as a 503 (service overload), this strategy increases the delay between retries exponentially.

csharp
Copy code
int attempts = 0;
int maxRetryAttempts = 5;
int delay = 200; // initial delay

do
{
    try
    {
        attempts++;
        result = await searchClient.IndexDocumentsAsync(batch);
        return result;
    }
    catch (RequestFailedException)
    {
        if (attempts == maxRetryAttempts) break;
        await Task.Delay(delay);
        delay *= 2;
    }
} while (true);

 */