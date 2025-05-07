function formatString(input: string, toUpper?: boolean): string {
  if (toUpper || toUpper === undefined) {
    return input.toUpperCase();
  }
  return input.toLowerCase();
}

console.log(formatString("Hello"));
console.log(formatString("Hello", true));
console.log(formatString("Hello", false));
