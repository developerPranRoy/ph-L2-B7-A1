# How Generics Help Build Reusable and Type-Safe Code

## Introduction

Generics are one of the most powerful features in TypeScript. They allow developers to create reusable functions, classes, and components while keeping strict type safety.

Without generics, developers often duplicate code for different data types. Generics solve this problem efficiently.

---

## Problem Without Generics

Consider this example:

```ts
function getString(value: string): string {
  return value;
}

function getNumber(value: number): number {
  return value;
}
```

Both functions perform the same task but are written separately for different types.

This creates unnecessary duplication.

---

## Using Generics

Generics allow us to write one reusable function.

```ts
function getValue<T>(value: T): T {
  return value;
}
```

Now the same function works for multiple types.

```ts
getValue<string>("Hello");
getValue<number>(100);
getValue<boolean>(true);
```

TypeScript automatically preserves the correct return type.

---

## Generics with Arrays

Generics are also useful with arrays.

```ts
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}
```

Usage:

```ts
getFirstElement<number>([1, 2, 3]);
getFirstElement<string>(["A", "B", "C"]);
```

This keeps the function reusable and strongly typed.

---

## Generics with Interfaces

Generics can also be used in interfaces.

```ts
interface ApiResponse<T> {
  success: boolean;
  data: T;
}
```

Example:

```ts
const response: ApiResponse<string> = {
  success: true,
  data: "Data loaded",
};
```

This makes interfaces flexible for different data structures.

---

## Benefits of Generics

Generics provide:

- Code reusability
- Strong type safety
- Better scalability
- Cleaner code
- Improved developer experience

They are especially important in large applications and reusable libraries.

---

## Conclusion

Generics help developers write flexible and reusable code without sacrificing type safety. They reduce duplication, improve maintainability, and make TypeScript applications more scalable and reliable.