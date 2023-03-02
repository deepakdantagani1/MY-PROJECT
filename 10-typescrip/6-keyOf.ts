
/**
 * gerenric with keyof
 */

function getValue(source, propertyName){
  return source[propertyName];
}

function getValue1<T>(source : T, propertyName : keyof T) : T[keyof T]{
  return source[propertyName];
}

getValue1({one: "1"}, "one");

function getValue3<T, U extends keyof T>(source : T, propertyName: U ): T[U]{
  return source[propertyName];
}

getValue3({something: "value"}, "something");
