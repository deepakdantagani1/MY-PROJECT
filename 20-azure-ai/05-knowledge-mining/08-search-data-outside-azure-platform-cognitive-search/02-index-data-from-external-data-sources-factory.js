/**
 * Exam Tips for Azure AI Engineer Associate
Understand the Role of ADF in Azure Cognitive Search:

Know how to use ADF to move data into a search index and how it integrates with Azure Cognitive Search.
Remember Limitations:

Basic data types only; no support for complex types.
Index must be pre-created in Azure Cognitive Search.
Field Mapping Knowledge:

Be able to configure and customize field mappings in the schema to ensure data flows correctly into the index.
Pipeline Configuration:

Familiarize yourself with how to schedule pipelines for regular updates and the implications of data refresh options (e.g., updating vs. replacing data).
 */


/**
 * Indexing External Data in Azure Cognitive Search Using ADF
Overview
Azure Data Factory (ADF) allows integration of external data from various sources into Azure Cognitive Search for searchable and analyzable data in the search index.
Useful when data resides outside Azure, such as on-premises systems or third-party platforms.
Key Steps to Index Data Using ADF
Create an Azure AI Search Index

Set up a search index with fields that match the data structure being imported.
ADF cannot create indexes, so this must be done separately in Azure Cognitive Search.
Create an ADF Pipeline Using Copy Data Tool

Use the Copy Data activity to ingest data into the search index.
Configure the pipeline to run periodically if you need to keep the search index updated with changing data.
Configure Source and Target Connections

Source Connection: Set up a linked service to access the external data source. Options include HTTP, REST, databases, etc.
Target Connection (Sink): Use the Azure Cognitive Search connector as the sink to send the data to the search index.
Map Fields Between Source and Target

Use schema mapping to align fields from the source data with fields in the search index.
ADF can auto-map fields if names match; custom mappings are needed for complex field names or structures.
Run the Pipeline

Deploy and run the pipeline to push data from the source to the search index.
You can set the pipeline to update existing records or replace data on each run.
Verify Imported Data

Use Search Explorer in the Azure portal to query and verify the imported data in the index.
 */


/**
 * +-----------------------+
|                       |
| 1. Create Azure AI    |
|    Search Index       |
|                       |
+-----------------------+
            |
            |
            v
+-----------------------+        +----------------------------------+
|                       |        |                                  |
| 2. Create ADF Pipeline|        |  3. Configure Source Connection  |
|    (Copy Data Tool)   |--------|                                  |
|                       |        | - Choose data source type (e.g., |
+-----------------------+        |   HTTP, REST)                    |
            |                    | - Enter URL or data location     |
            |                    | - Set file format (e.g., JSON)   |
            v                    +----------------------------------+
+-----------------------+                         |
|                       |                         |
| 4. Configure Target   |------------------------|
|    Connection (Sink)  |                         v
|    to Azure Cognitive |                +---------------------------------+
|    Search             |                |                                 |
+-----------------------+                |  5. Map Source Fields to        |
            |                            |     Target Fields in Index      |
            |                            |                                 |
            v                            | - Auto-map if field names match |
+-----------------------+                | - Custom map if needed          |
|                       |                +---------------------------------+
| 6. Run the Pipeline   |
|    to Push Data       |
|    into Index         |
|                       |
+-----------------------+
            |
            v
+-----------------------+      +-----------------------------------+
|                       |      |                                   |
| 7. Verify Imported    |<-----|  Azure Cognitive Search          |
|    Data in Search     |      |  Limitations                     |
|    Explorer           |      |                                   |
|                       |      | - Supports only basic data types |
+-----------------------+      | - No support for arrays or nested|
                               |   objects in full               |
                               | - Index creation must be done    |
                               |   manually                       |
                               +-----------------------------------+

 */