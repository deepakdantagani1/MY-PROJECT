/**
 * Use patterns to differentiate similar utterances
 * 
 * use the pattern of utterances to disambiguate the intents while minimizing the number of sample utterances.
 * 
 * ex: For example, consider the following utterances:

"Turn on the kitchen light"
"Is the kitchen light on?"
"Turn off the kitchen light"

To correctly train your model, provide a handful of examples of each intent that specify the different formats of utterances.

TurnOnDevice:
"Turn on the {DeviceName}"
"Switch on the {DeviceName}"
"Turn the {DeviceName} on"
GetDeviceStatus:
"Is the {DeviceName} on[?]"
TurnOffDevice:
"Turn the {DeviceName} off"
"Switch off the {DeviceName}"
"Turn off the {DeviceName}"
 * 
 */