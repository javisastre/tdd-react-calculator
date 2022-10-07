export const canReconfigure = (from, to) => {
  if (!from || typeof from !== "string")
    throw new Error("first parameter must be a string");
  if (!to || typeof to !== "string")
    throw new Error("second parameter must be a string");
  if (new Set(from).size !== new Set(to).size) return false;

  let answer = true;
  from.split("").reduce((acc, letter, i) => {
    if (acc[letter] && acc[letter] !== to[i]) answer = false;

    acc[from[i]] = to[i];
    return acc;
  }, {});
  return answer;
};
