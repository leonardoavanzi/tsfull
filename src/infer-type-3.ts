{

    type FunctionKeys<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T]

    type Pick<T, U extends keyof T> = { [K in U]: T[K] extends () => infer X ? X : never };

    function runPickedFunctions<T>(obj: T): Pick<T, FunctionKeys<T>> {
        throw "not implemented"

    }
    const user = {
        name: "kurt",
        age: 4,
        say: () => "hello",
        sayCopy: () => "copy",

    }
    const picked = runPickedFunctions(user);

    type PickedType = typeof picked;
}