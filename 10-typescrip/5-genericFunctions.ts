

/**
 * functions ==> types paramaters and return type
 */

/**
 * generics ==> functions, interfaces and many
 * generics with extends
 */

function clone(contact: Contact): Contact {
  return Object.assign({}, contact);
}

function cloneGeneric<T>(source: T): T {
  return Object.assign({}, source)
}

const a: Contact = {
  id: 234,
  name: "string",
  status: "active"
}

const f: Contact = clone(a);
