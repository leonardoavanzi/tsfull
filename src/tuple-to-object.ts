type TupleToObject<T extends readonly PropertyKey[]> = {
  [TIndex in T[number]]: TIndex;
}

type SDAPFKAOP = TupleToObject<[10,20,30]>
type ArrayMember = typeof tuple[number]

const tuple = ["abcd", "mecatref", "robocop", "subzero"] as const;

// @ts-expect-error
type error = TupleToObject<[[1, "09321"], {age: 20}]>;


