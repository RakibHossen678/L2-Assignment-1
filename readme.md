# 1. The Significance of Union and Intersection Types in TypeScript
``Union`` and ``Intersection`` are two of the most important types in TypeScript. Union type describes the value as one of the given types. For the ``Union`` type, we use the ``|``  Symbol.  On the other hand, ``Intersection`` type describes that the value must have all the given types. For Intersection Type, we use the ``&`` Symbol. 

# Union

```typescript
const generateLengthOrString = (
    val: number | string
  ): number | string | undefined => {
    if (typeof val === "number") {
      return val ** 2;
    } else if (typeof val === "string") {
      return val.length;
    } else undefined;
  };

generateLengthOrString('Hello')
generateLengthOrString(5)
```
In this example, function can accept both a string and a number.


# Intersection

```typescript
  interface Book {
    title: string;
    publisher: string;
    publishedDate: Date;
    writer: string;
  }

  interface Magazine {
    title: string;
    publisher: string;
    publishedDate: Date;
    editor: string;
  }

  const bookAndMagazine: Book & Magazine = {
    title: "The Great Gatsby",
    publisher: "Scribner",
    publishedDate: new Date("1925-04-10"),
    writer: "F. Scott Fitzgerald",
    editor: "Maxwell Perkins",
  };
```

In this example bookAndMagazine object must have all the propertiest of Book and Magazine.



# 2. What are some differences between interfaces and types in TypeScript?

The ``type`` keyword in TypeScript is a way to declare  type to  variables, objects, and functions. On the other hand ``interface`` is a way to declare type to object. 

Using ``type`` keyword we can declare both primitive and non-primitive data types. Using ``interface`` type we can declare only object types. If we want to extend ``type`` then we use ``intersection (&)``. On the other hand, if we want  to extend the ``interface`` then we use ``extends`` keyword. And also we can convert a type to an ``interface`` by extending.



# Types

```typescript
type Name = string;
type Age = Number;
type Address ={
  city:string;
  zip-code:number
}
type Degree = string[]
```
In this example i declare type for string , number, object and array with ``type`` keyword

# Interface 

```typescript

interface User {
  name:string;
  age:number;
  isAdmin:booleam
}

```

In this example i declare type for  object  with ``interface`` keyword


