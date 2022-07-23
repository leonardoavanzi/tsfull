
export const deepEqualCompare = <Arg>(
    x: Arg extends any[] ? `Don't pass an array...` : Arg,
    y: Arg,
): boolean => {
    return x === y;
};
//ok
deepEqualCompare('x', 'y');

// error
deepEqualCompare([], []);


