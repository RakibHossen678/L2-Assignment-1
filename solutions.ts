function formatString(input: string, toUpper?: boolean): string {
  if (toUpper || toUpper === undefined) {
    return input.toUpperCase();
  }
  return input.toLowerCase();
}

console.log(formatString("Hello"));
console.log(formatString("Hello", true));
console.log(formatString("Hello", false));

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const booksWithRatingsMoreThan4 = items.filter((item) => item.rating >= 4);
  return booksWithRatingsMoreThan4;
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];
console.log(filterByRating(books));

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

console.log(concatenateArrays(["a", "b"], ["c"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));

class Vihicale {
  private make: string;
  year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo() {
    console.log(`Make: ${this.make}, Model: ${this.year}`);
  }
}

class Car extends Vihicale {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel() {
    console.log(`Model: ${this.model}`);
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();
myCar.getModel();

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  }
  return value * 2;
}

console.log(processValue("hello"));
console.log(processValue(10));

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length > 0) {
    const getMostExpensiveProduct = products.sort((a, b) => b.price - a.price);
    return getMostExpensiveProduct[0];
  }
  return null;
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Football", price: 500 },
  { name: "Bag", price: 50 },
];

console.log(getMostExpensiveProduct(products));
