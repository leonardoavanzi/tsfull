{
    type Pick<T, U extends keyof T> = { [K in U]: T[K] }
    function pick<T, U extends keyof T>(obj: T, keys: U[]): Pick<T, U> {
        throw "not implemented"
    }

    const user = {
        name: "Leonardo",
        age: 20,
        say: () => "hello",
        skip: "\u006e",
    }

    const picked = pick(user, ["name", "age"]);

    type resolved = typeof picked;

    //ok
    pick(user, ["name", "age"]);

    //expected to throw error 
    pick(user, ["foo"]);
    pick(user, "1");
    pick(user, [10, 0]);
    pick(user, ["name", "age", "x"]);
    pick(user, ["name", "ag"]);
    pick(user, ["name", ""]);



}