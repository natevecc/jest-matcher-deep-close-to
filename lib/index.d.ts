import { Iterable } from './recursiveCheck';
export interface MatcherResult {
    message: () => string;
    pass: boolean;
}
export declare function toBeDeepCloseTo(received: Iterable, expected: Iterable, decimals?: number): MatcherResult;
export declare function toMatchCloseTo(received: Iterable, expected: Iterable, decimals?: number): MatcherResult;
