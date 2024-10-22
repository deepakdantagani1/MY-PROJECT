/**
 * test using Completions playground
 * 
 * parameters:
 * Temperature (0-1): The higher the temperature, the more creative the completion.
 * Max length (tokens) (1-2048): The maximum number of tokens in the completion. =
 * Stop sequences (optional): A list of sequences where the model should stop generating the completion.
 * Top probabilities (0-1): The probability threshold for including tokens in the completion.
 * Frequency penalty (0-1): The penalty for using a token that has already been used in the completion.
 * Presence penalty (0-1): The penalty for using a token that has not been used in the completion.
 * Pre-response text (optional): Insert text after the user’s input and before the model’s response. This can help prepare the model for a response.
 * Post-response text: Insert text after the model’s response. This can help guide the model to generate a more accurate response.
 * 
 * 
 * 
 * High Temperature + High Top-p = Highly creative, unpredictable, and varied responses.
Low Temperature + High Top-p = Structured, logical, and less random responses.
High Temperature + Low Top-p = Creative but still somewhat controlled, offering a balance between randomness and coherence.
Low Temperature + Low Top-p = Most deterministic and predictable, generating safe and standard responses.
 */


/**
 * Chat playground
 * 
 * parameters:
 * Max response ==> The maximum number of tokens in the completion.
 * Past messages included ==> The number of previous messages to include in the context.
 */