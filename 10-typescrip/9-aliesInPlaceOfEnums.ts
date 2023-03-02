

/**
 * using type alices in place of enums
 */

type ContactStatus = "closed" | 'pending' | 'in-progress'

interface Contact3 {
  id: number;
  name: string;
  status: ContactStatus;
}

let contact30: Contact3 = {
  id: 6789,
  name: "hjk",
  status : "in-progress"
}
