/**
 * Improve the relevance of results by adding scoring profiles
 * ==> Azure AI Search uses the BM25 similarity ranking algorithm. The algorithm scores documents based on the search terms used.
 */

/**
 * Step 1: Adding a Weighted Scoring Profile
 * In this case, you can create a scoring profile that boosts certain fields. Let's say:
 * ==> Description is 5 times more important
 * ==> Category is 2 times more important than the HotelName or Location fields.
 * 
 * search=luxury AND Tags:'air con'*&$select=HotelId, HotelName, Category, Tags, Description&$count=true&scoringProfile=boost-category&queryType=full
 */

/**
 * Step 2: Adding Functions to the Scoring Profile
 * You can also use functions to refine the relevance further. Let’s look at a few:
 * ex: ==> Freshness (Boosting newer hotels)
 *     ==> Distance (Boosting hotels closer to a location)   
 * 
 * search=luxury AND Tags:'air con'*&$select=HotelId, HotelName, Category, Tags, Location&$count=true&scoringProfile=boost-distance&$filter=geo.distance(Location, geography'POINT(-73.97 40.77)') lt 5
 * 
 */

/**
 * Step 3: Combining Weighting and Functions
 * You can combine weighted fields and functions in one scoring profile. For instance:
 * ==> Give more weight to the Category field.
 * ==> Apply a Distance function to boost hotels closer to a specific location.
 * ==> Apply a Freshness function to favor hotels recently added to your database.
 * 
 */

/**
 * Step 4: Applying Scoring Profiles Programmatically
 * ==> search=luxury AND Tags:'air con'*&$select=HotelId, HotelName, Category, Tags, Location&$count=true&scoringProfile=boost-category&queryType=full
 */