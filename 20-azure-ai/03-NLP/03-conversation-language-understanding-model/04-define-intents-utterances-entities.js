/**
 * -------Define intents, utterances, and entities----------
 * utterances ==> phrases that users might say to convey their intent. Ex; "Book a flight"
 * intent ==> the action that the user wants to perform. Ex; "BookFlight"
 * model ==> a machine learning model that maps utterances to intents and entities.
 * entities ==> specific pieces of information that the model should extract from the utterances. 
 * Ex; "Seattle" and "London" from "Book a flight from Seattle to London"
 * 
 * | Utterance                                | Intent        | Entities                                   |
|------------------------------------------|---------------|--------------------------------------------|
| What is the time?                        | GetTime       |                                            |
| What time is it in London?               | GetTime       | Location (London)                          |
| What's the weather forecast for Paris?   | GetWeather    | Location (Paris)                           |
| Will I need an umbrella tonight?         | GetWeather    | Time (tonight)                             |
| What's the forecast for Seattle tomorrow?| GetWeather    | Location (Seattle), Time (tomorrow)        |
| Turn the light on.                       | TurnOnDevice  | Device (light)                             |
| Switch on the fan.                       | TurnOnDevice  | Device (fan)                               |

 * 
 * none intent ==> you must define the intents that you want your model to understand, 
 * so spend some time considering the domain your model must support and the kinds of actions or information 
 * that users might request
 * 
 **/


/**
 * guidelines in mind:
 * ==> Capture multiple different example
 * ==> Vary the length of the utterances from short, to medium, to long
 * ==> Vary the location of the noun or subject of the utterance. Place it at the beginning, the end, or somewhere in between
 * ==> Use correct grammar and incorrect grammar in different utterances to offer good training data examples
 * ==> Label precisely, Label consistently, Label completely
 *
 */

/**
 * Entities into a few different component types:
├── Learned Entities
│   ├── Example: "I want to return my **red jacket**."
│   └── Training Data: [ "red jacket", "phone case", ... ]
│
├── List Entities
│   ├── DayOfWeek
│   │   ├── Values: [ "Sunday", "Monday", "Tuesday", ... ]
│   │   └── Synonyms: [ "Sun", "Mon", "Tue", ... ]
│   └── Example: "Can I book a slot on **Thu**?"
│
└── Prebuilt Entities
    ├── datetimeV2: "I want to book a ticket for **next Friday**."
    └── number: "I need **3** tickets."
*/


/**

| Utterance                                    | Intent         | Entities                                            |
|----------------------------------------------|----------------|-----------------------------------------------------|
| What's the latest news?                      | GetNews        |                                                     |
| Show me the news about technology.           | GetNews        | Category (technology)                               |
| What's the news about the stock market today?| GetNews        | Category (stock market), Time (today)               |
| Set an alarm for 7 AM.                       | SetAlarm       | Time (7 AM)                                         |
| Remind me to call John at 3 PM.              | SetReminder    | Person (John), Time (3 PM)                          |
| How's the traffic to the airport?            | GetTraffic     | Destination (airport)                               |
| Is there traffic on the way to New York?     | GetTraffic     | Destination (New York)                              |
| Play some music.                             | PlayMusic      |                                                     |
| Play classical music.                        | PlayMusic      | Genre (classical)                                   |
| Can you play the song "Imagine" by John Lennon?| PlayMusic    | Song (Imagine), Artist (John Lennon)                |
| Book a table for two at a French restaurant. | BookTable      | NumberOfPeople (two), Cuisine (French)              |
| Reserve a table at Joe's Steakhouse for four.| BookTable      | Restaurant (Joe's Steakhouse), NumberOfPeople (four)|
| What's the temperature outside?              | GetWeather     |                                                     |
| Will it rain tomorrow in New York?           | GetWeather     | Location (New York), Time (tomorrow)                |
| What's the weather like on Saturday?         | GetWeather     | Time (Saturday)                                     |
| Call my mom.                                 | MakeCall       | Contact (mom)                                       |
| Call Dr. Smith's office.                     | MakeCall       | Contact (Dr. Smith's office)                        |
| How much is 25 euros in dollars?             | CurrencyConvert| Amount (25 euros), Currency (dollars)               |
| Convert 100 yen to USD.                      | CurrencyConvert| Amount (100 yen), Currency (USD)                    |
| Find a Chinese restaurant nearby.            | FindPlace      | Cuisine (Chinese), Proximity (nearby)               |
| Locate the nearest gas station.              | FindPlace      | Place (gas station), Proximity (nearest)            |
| Send an email to Jane.                       | SendEmail      | Recipient (Jane)                                    |
| Email the project report to the team.        | SendEmail      | Content (project report), Recipient (team)          |
| Order a pepperoni pizza.                     | OrderFood      | Dish (pepperoni pizza)                              |
| I want a large coffee with milk.             | OrderFood      | Size (large), Drink (coffee), AddOn (milk)          |
| Book a flight to Tokyo next month.           | BookFlight     | Destination (Tokyo), Time (next month)              |
| Find a flight from New York to London.       | BookFlight     | Origin (New York), Destination (London)             |
| Schedule a meeting with the marketing team.  | ScheduleMeeting| Participants (marketing team)                       |
| Arrange a conference call at 10 AM.          | ScheduleMeeting| Type (conference call), Time (10 AM)                |

 */