# 1. The Significance of Union and Intersection Types in TypeScript
Union and Intersection are two of the most important types in TypeScript. Union type describes the value as one of the given types. For the Union type, we use the “|”  Symbol.  On the other hand, Intersection type describes that the value must have all the given types. For Intersection Type, we use the “&” Symbol.

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
