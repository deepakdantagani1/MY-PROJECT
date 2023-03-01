/**
 * type casting
 */

let x: number;
let b: number[];

b = 2 as any;

/**
 * creating custom types with the interface
 * optional paramaters
 * interface at compile time, class at the run time
 * extends
 */

interface Contact extends Address {
  name: string;
  id: string | number;
  dob?: Date;
}

interface Address {
  address1: string;
  address2?: string;
  zipCode: number | string;
  state: string;
}

const primaryContact: Contact = {
  name: 'pavan',
  id: 6789,
  address1: '1022',
  address2: 'egypt',
  state: 'tx',
  zipCode: 889,
}

/**
 * type alias ==> new name for an existing type.
 */

type numberOrString = number | string;

interface vehical {
  carModel: numberOrString
}

/**
 * enums
 */

enum Status {
  active = 'Active',
  inactive = 'Inactive'
}

interface Appointment {
  status: Status;
  date: Date
}

const appointment: Appointment = {
  status: Status.active,
  date: new Date()
}

/**
 * functions ==> types paramaters and return type
 */

/**
 * generics ==> functions, interfaces and many
 */

function clone(contact: Contact): Contact {
  return Object.assign({}, contact);
}

function cloneGeneric<T>(source: T): T {
  return Object.assign({}, source)
}

const a: Contact = {
  name: 'pavan',
  id: 6789,
  address1: '1022',
  address2: 'egypt',
  state: 'tx',
  zipCode: 889,
}

const f: Contact = clone(a);


