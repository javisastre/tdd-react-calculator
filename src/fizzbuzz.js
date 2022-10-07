export const fizzbuzz = (number) => {
  if (typeof number !== "number" || Number.isNaN(number))
    throw new Error("parameter must be a number");
  if (number % 3 === 0 && number % 5 === 0) return "fizzbuzz";
  if (number % 3 === 0) return "fizz";
  if (number % 5 === 0) return "buzz";
  return number;
};
