// Problem here https://www.hackerrank.com/challenges/apple-and-orange/problem

export const countApplesAndOranges = (
  s: number,
  t: number,
  a: number,
  b: number,
  apples: number[],
  oranges: number[]
) => {
  const apples_count = apples.filter(
    (apple) => apple + a >= s && apple + a <= t
  ).length;
  const oranges_count = oranges.filter(
    (orange) => orange + b >= s && orange + b <= t
  ).length;
  return [apples_count, oranges_count];
};

// export const countApplesAndOranges = (
//   s: number,
//   t: number,
//   a: number,
//   b: number,
//   apples: number[],
//   oranges: number[]
// ) => {
//   const applesLands = apples
//     .map((apple) => apple + a)
//     .filter((apple) => apple >= s && apple <= t).length;
//   const orangesLands = oranges
//     .map((orange) => orange + b)
//     .filter((orange) => orange >= s && orange <= t).length;
//   // console.log(applesLands);
//   // console.log(orangesLands);
//   return [applesLands, orangesLands];
// };
