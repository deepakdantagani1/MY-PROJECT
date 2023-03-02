

/**
 * define Dynamic but implemented with records
 * records is for the objects
 */

let x : Record<string, string | number> = {
  a : 'lol',
  b: 6789
};

type ContactStatus1 = "active" | "inactive" | "new";

interface Address {
    street: string;
    province: string;
    postalCode: string;
}

interface Contact {
    id: number;
    name: string;
    status?: ContactStatus;
    address?: Address;
}

interface query {
  match(val : string | number) : boolean
}


function searchContacts1(contacts : Contact[], query : Record<string, query>) {
  contacts.filter(contact => {
    for(let property of Object.keys(query)){
      const propertyQuery = query[property];
      return propertyQuery.match(contact[property]);
    }
    return false;
  })
}

searchContacts1([], {
  id : {match : (id) =>  id === 123},
  name : {match: (name) => name ==='john'}
})

