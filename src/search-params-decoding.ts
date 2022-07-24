import { String, Union } from 'ts-toolbelt';


const query = `/open?order=102030&transactionId=500`;

type Query = typeof query;

// split after "?" 
type SecondQueryPart = String.Split<Query, "?">[1];

type QueryElements = String.Split<SecondQueryPart, "&">;

type QueryParams = {
    [x in QueryElements[number]]: {
        [Key in String.Split<x, "=">[0]
    ]: String.Split<x, "=">[1];

    };

}[QueryElements[number]];

const obj: Union.Merge<QueryParams> = {
    order: "102030",
    transactionId: "500"

}
