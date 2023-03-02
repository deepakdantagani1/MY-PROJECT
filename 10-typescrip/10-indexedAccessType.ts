
/**
 * indexed access types
 */

type Product = {
  id: string;
  name: string;
  price: number;
};

type ProductProperty = keyof Product;

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const product: Product = { id: "1", name: "Widget", price: 9.99 };

//here it is
const propertyName: ProductProperty = "name";
const propertyValue = getProperty(product, propertyName); // type is string, value is "Widget"
