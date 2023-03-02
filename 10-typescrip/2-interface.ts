

/**
 * creating custom types with the interface
 * optional paramaters
 * interface at compile time, class at the run time
 * extends
 */

interface Contact111 extends Address11 {
  name: string;
  id: string | number;
  dob?: Date;
}

interface Address11 {
  address1: string;
  address2?: string;
  zipCode: number | string;
  state: string;
}

const primaryContact: Contact111 = {
  name: 'pavan',
  id: 6789,
  address1: '1022',
  address2: 'egypt',
  state: 'tx',
  zipCode: 889,
}
