export const stringifyBI = (obj: object, space: string | number | undefined) =>
  JSON.stringify(
    obj,
    (_, v) => (typeof v === "bigint" ? v.toString() : v),
    space,
  );
