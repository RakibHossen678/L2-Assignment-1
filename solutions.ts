function formatString(input: string, toUpper?: boolean): string {
  if (toUpper || toUpper === undefined) {
    return input.toUpperCase();
  }
  return input.toLowerCase();
}


function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const booksWithRatingsMoreThan4 = items.filter((item) => item.rating >= 4);
  return booksWithRatingsMoreThan4;
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}


class Vihicale {
  private make: string;
  private year: number;

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



function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  }
  return value * 2;
}



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


enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Sunday) {
    return "Weekend";
  }
  return "Weekday";
}



async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n > 0) {
        resolve(n * n);
      } else {
        reject("Negative number");
      }
    }, 1000);
  });
}


