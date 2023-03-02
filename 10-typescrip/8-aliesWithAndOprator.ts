/**
 * difference between alies with & opration and extends
 *
 * Note that when using extends, the new type is a subtype of the parent type, and can be used in place of the
 * parent type. In the example above, Employee can be used wherever Person is expected.
 * On the other hand, when using the & operator to create an intersection type, the resulting type has all the
 * properties and methods of both types being intersected. This means that an object of the resulting type must
 * satisfy all the properties of each type being intersected. Intersection types are useful when you need to combine
 * multiple types into a single type, while still retaining all their individual properties and methods.
 *
 */

interface Contact1 {
  id: number;
  name: string;
}

interface Address4 {
  addressLineOne: string;
  addressLineTwo: string;
}

type ContactWithAddress = Contact1 & Address4;
