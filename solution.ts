

//  ============ 01 ======================
function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

//  ============ 02 ======================
function reverseString(text: string): string {
  return text.split("").reverse().join("");
}

//  ============ 03 ======================
type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
  if (typeof value === "string") {
    return "String";
  }

  return "Number";
}

//  ============ 04 ======================
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

//  ============ 05 ======================
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}

//  ============ 06 ======================
class Person {
  constructor(public name: string, public age: number) {}
}

class Student extends Person {
  constructor(name: string, age: number, public grade: string) {
    super(name, age);
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

//  ============ 07 ======================
function getIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter((num) => arr2.includes(num));
}