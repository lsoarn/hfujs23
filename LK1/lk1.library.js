export class Person {
  constructor(firstName, middleName, lastName, birthDate) {
    this.firstName = firstName ?? "John";
    this.middleName = middleName ?? "Q.";
    this.lastName = lastName ?? "Doe";
    this.birthDate = birthDate ?? new Date(1990, 1, 1);
  }

  fullName() {
    return `${this.firstName} ${this.middleName} ${this.lastName}`;
  }

  age() {
    return new Date().getFullYear() - this.birthDate.getFullYear();
  }

  toString() {
    return this.fullName();
  }
}

export class Teacher extends Person {
  constructor(firstName, middleName, lastName, birthDate, schoolName) {
    super(firstName, middleName, lastName, birthDate);
    this.schoolName = schoolName ?? "unknown";
  }

  fullName() {
    return `${super.fullName()} @ ${this.schoolName}`;
  }
}

export function getFirstAndLastLetters(test) {
  return {
    first: test[0],
    last: test[test.length -1],
  };
}

export function getReverse(test) {
  return test.split("").reverse().join("");
}

export function getCapitalized(test) {
  return test.map(t => t.toUpperCase());
}

export function getOddCapitalized(test) {
  return test.map((t, i) => (i % 2 === 1 ? t.toUpperCase() : t));
}

export const getFibonacci = n => {
  if (!Number.isInteger(n) || n < 0) {
    return -1;
  }

  if (n === 0 || n === 1) {
    return n;
  }

  return getFibonacci(n - 1) + getFibonacci(n - 2);
};

export function* getFibonacciSequence() {
  let a = 0, b = 1;
  while (true) {
  // Sehr schön! Eine sehr kompakte und nicht rekursive Lösung.
  // Man hätte auch getFibonacci() oben aufrufen können.

    yield a;
    [a, b] = [b, a + b];
  }
}

export function getCopyOfArray(a) {
  // Geht auch mit dem Spread-Operator
  // [...a]
  return a.slice();
}

export function getJsonWithNiceFormattingAndNoNumbers(obj) {
  return JSON.stringify(
    obj,
    (k, v) => {
      return typeof v === "number" ? undefined : v;
    },
    2,
  );
}

export function getPropertyNames(obj) {
  return Object.keys(obj);
}

export function getPropertyValues(obj) {
  return Object.values(obj);
}

export function divide(numerator, denominator) {
  if (denominator === 0)
  {
    return NaN;
  }
  return numerator / denominator;
}

export function strictDivide(numerator, denominator) {
  if (denominator === 0) {
    throw Error("Cannot divide by zero.");
  }

  return divide(numerator, denominator);
}

export function safeDivide(numerator, denominator) {
  try {
    return strictDivide(numerator, denominator);
  } catch {
    return NaN;
  }
}

export function getObjectWithAOnly(obj) {
  const { a, rest } = obj;

  return { a };
}

export function getObjectWithAllButA(obj) {
  const { a, ...rest } = obj;

  return rest;
}
