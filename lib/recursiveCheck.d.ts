export declare type Iterable = number | Iterable[] | {
    [k: string]: Iterable;
} | string | null | undefined | boolean;
export interface Error {
    reason: string;
    expected: unknown;
    received: unknown;
}
/**
 * @param {number|Array} received
 * @param {number|Array} expected
 * @param {number} decimals
 * @param {boolean} strict equality or subsets allowed
 * @return {boolean|{reason, expected, received}}
 */
export declare function recursiveCheck(received: Iterable, expected: Iterable, decimals: number, strict?: boolean): false | Error;
