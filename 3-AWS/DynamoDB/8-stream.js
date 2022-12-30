/**
 * time order sequence of item level modification (eg, insert, update and delete)
 * encrypted at rest and stored for 24hrs
 * accessed using a dedicated endpoint
 * by default primary key is recorded
 * before an after images can be created
 * usecase ==> audit or archive transations, trigger an event based on a perticualr transation or replicate data cross
 * multiple tables
 */
