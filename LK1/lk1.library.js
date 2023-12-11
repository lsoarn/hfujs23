export class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName ?? "John";
    this.lastName = lastName ?? "Doe";
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export class Teacher extends Person {
  constructor(firstName, lastName, schoolName) {
    super(firstName, lastName);
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
  return test.map(t => t.toUpperCase());
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
    yield a;
    [a, b] = [b, a + b];
  }
}

export function getCopyOfArray(a) {
  return a.slice();
}

export function getJsonWithNiceFormattingAndNoNumbers(obj) {
  return JSON.stringify(obj, (k, v) => {
    return v;
  });
}

export function getPropertyNames(obj) {
  return Object.keys(obj);
}

export function* getPropertyValues(obj) {
  for (const objKey in obj) {
    yield obj[objKey];
  }
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
  return obj;
}

export function getObjectWithAllButA(obj) {
  return obj;
}
