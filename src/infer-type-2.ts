{

    type FunctionKeys<T> = {[K in keyof T]: T[K] extends Function ? K : never }[keyof T]

    type Pick<T, U extends keyof T> = { [K in U]: T[K]}

    function pickFunctions<T>(obj: T): Pick<T, FunctionKeys<T>> {
        throw "not implemented"

    }
    const user = {
        name: "blue pen",
        age: 200,
        say: () => "hello",
        sayCopy: () => "copy",

    }
    const picked = pickFunctions(user);

    type PickedType = typeof picked;
}