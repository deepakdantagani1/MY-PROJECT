/**
 * types of classification projects
 * 
 * Single label classification ==> Assign a single label to each document or text snippet.
 * Multi-label classification ==> Assign multiple labels to each document or text snippet.
 */

/**
 * Labeling data
 * 
 * 
 */

/**
 * Evaluating and improving your model
 * 
 * False positive => model predicts x, but the file isn't labeled x.
 * False negative => model doesn't predict label x, but the file in fact is labeled x.
 * 
 * These metrics are translated into three measures provided by Azure AI Language:
 * Recall - Of all the actual labels, how many were identified; the ratio of true positives to all that was labeled.
 * Precision - How many of the predicted labels are correct; the ratio of true positives to all identified positives.
 * F1 Score - A function of recall and precision, intended to provide a single score to maximize for a balance of each component
 */

/*********************** TRICK IS ASKING WHAT IS WORST************************* 
 * False positive => model predicts x, but the file isn't labeled x.
 * False negative => model doesn't predict label x, but the file in fact is labeled x.
 * keep the prediction label first and the actual label second
*/

/**
 * Evaluation Metrics
├── Recall
│   ├── Formula: TP / (TP + FN)
│   └── Focus: Identifying all relevant instances
│       └── Examples: 
│           ├── Medical Diagnosis (e.g., Cancer Detection) - Simple
│           └── Security Intrusion Detection - Complex
│
├── Precision
│   ├── Formula: TP / (TP + FP)
│   └── Focus: Accuracy of the identified positives
│       └── Examples: 
│           ├── Spam Email Detection - Simple
│           └── Financial Fraud Detection - Complex
│
└── F1 Score
    ├── Formula: 2 * (Precision * Recall) / (Precision + Recall)
    └── Focus: Balancing recall and precision
        └── Examples: 
            ├── Product Review Sentiment Analysis - Simple
            └── Search Engine Relevance - Complex
 */

/**
 * API payload for classification
 * Single label classification models specify a project type of customSingleLabelClassification:
 * Multiple label classification models specify a project type of CustomMultiLabelClassification
 */