/**
 * mapping are fixed veriables within cloudFormation template
 * they are very handy to diff between diff environments (dev vs prod), regions, ami types
 * mappings are great when we know in advance all the values that can be taken and that thy can be deduced from veriables scuh as regin, AZ, aws acount etc
 *
 * ---how to use---
 * use Fn::FindInMap to return a named value from a specific keu
 * !FindInMap [ mapname, topLevelKey, secoundLevelKey ]
 *
 */
