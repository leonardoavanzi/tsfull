export const getDeepValue = <
T,
TFirstKey extends keyof T,
TSecondKey extends keyof T[TFirstKey]
>
(
    obj: T,
    firstKey: TFirstKey,
    secondKey: TSecondKey,
) => {
    return obj[firstKey][secondKey];
};

//

const obj = {
    foo: {
        a: true,
        b: 2,
    },
    
    bar: {
        c: "99",
        d: 99,
    },

    mec: {
        e: undefined,
        f: {}
    }
};
// typeof value - boolean || number
const value = getDeepValue(obj, "foo", "b")

// // typeof value2 - string || number
// const value2 = getDeepValue(obj, "bar", "c")

// const value3= getDeepValue(obj, "mec", "f")

typeof value === 'number'

const func = (val: any) => {

}
