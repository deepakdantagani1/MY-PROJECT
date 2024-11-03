/**
 * Machine learning custom skill
 * 
 * +------------------------+    1. Create and train model    +------------------------+
|                        |-------------------------------->|                        |
|   Azure Machine        |                                 |   Sentiment Analysis   |
|   Learning Studio      |                                 |   Model                |
|                        |<--------------------------------|                        |
|   (Model Training)     |    2. Deploy model to AKS      |   (Positive, Neutral,  |
+------------------------+                                 |   Negative)            |
                                                          +------------------------+
                                                                 |
                                                                 |
                                                                 |
                                                                 v
+------------------------+         3. Configure                +------------------------+
|                        |        AmlSkill in                  |                        |
|   Azure Cognitive      |        Azure Cognitive              |  Azure Kubernetes      |
|   Search               |        Search Skillset              |  Service (AKS)         |
|                        |------------------------------------>|                        |
|   (Skillset & Index    |    - Set URI and Key               |  (Model Endpoint)      |
|    Configuration)      |    - Map Input/Output Fields       +------------------------+
+------------------------+
        |
        |
        v
+------------------------+
|                        |
|   Review Document      |        4. Indexer sends           +------------------------+
|   {review_text: "This  |------->review_text to AKS         |                        |
|    product is great!"} |        model for prediction       |  Model processes text  |
+------------------------+                                    |  and returns sentiment |
                                                            |  (e.g., "Positive")    |
                                                            +------------------------+
                                                                 |
                                                                 |
                                                                 v
+------------------------+          5. Enrich document        +------------------------+
|                        |         with predicted sentiment   |                        |
|   Enriched Review      |<-----------------------------------|   Store output         |
|   Document             |         - predicted_sentiment:     |   in Azure Search      |
|   {review_text: "This  |           "Positive"               |   index (Enriched      |
|    product is great!", |                                    |   Document)            |
|    predicted_sentiment:|                                    +------------------------+
|    "Positive"}         |
+------------------------+

6. Search Results:
   - Users can now search reviews and filter by sentiment (Positive, Neutral, Negative) in the Azure Cognitive Search index.



 */


   /**
    * Summary of Steps in Diagram
Create and Train Model in Azure Machine Learning Studio.
Deploy Model to AKS as a web service.
Configure AmlSkill in Azure Cognitive Search:
Set the URI and access key for the model.
Map input fields (e.g., review_text) and output fields (e.g., predicted_sentiment).
Indexer Sends Document to Model:
The indexer extracts review_text from each document and sends it to the model for prediction.
Model Predicts Sentiment:
The model processes the input and returns a sentiment prediction.
Enrich Document in the Azure Cognitive Search Index:
The predicted_sentiment field is added to the document in the index, making it searchable and filterable.
Search Results:
Users can search and filter documents in the Azure Cognitive Search index based on enriched data like sentiment.

    */