/**
 * partila is to definal a set of types
 * partila addes optionl to all the properties of an object
 *
 * Omit
 *
 * pick
 *
 * required
 */
let x1: Record<string, string | number> = {
  a: 'lol',
  b: 6789
};

type ContactStatus2 = "active" | "inactive" | "new";

interface Address {
  street: string;
  province: string;
  postalCode: string;
}

interface Contact66 {
  id: number;
  name: string;
  status2: ContactStatus2;
  address?: Address;
}

interface query1 {
  match(val): boolean
}

type ContactQuery = Partial<Record<keyof Contact66, query1>>;

function searchContacts(contacts: Contact66[], query: ContactQuery) {
  contacts.filter(contact => {
    for (let property of Object.keys(query)) {
      const propertyQuery = query[property];
      return propertyQuery.match(contact[property]);
    }
    return false;
  })
}

searchContacts([], {
  id: { match: (id) => id === 123 },
  name: { match: (name) => name === 'john' }
})
