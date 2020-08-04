"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number|Array} received
 * @param {number|Array} expected
 * @param {number} decimals
 * @param {boolean} strict equality or subsets allowed
 * @return {boolean|{reason, expected, received}}
 */
function recursiveCheck(received, expected, decimals, strict = true) {
    if (typeof received === 'number' && typeof expected === 'number') {
        // Received and expected are numbers
        if (isNaN(received)) {
            return isNaN(expected)
                ? false
                : {
                    reason: `Expected value to be (using ${decimals} decimals)`,
                    expected,
                    received,
                };
        }
        else if (!isFinite(received)) {
            return received === expected
                ? false
                : {
                    reason: `Expected value to be`,
                    expected,
                    received,
                };
        }
        else if (Math.abs(received - expected) <= Math.pow(10, -decimals)) {
            return false;
        }
        else {
            return {
                reason: `Expected value to be (using ${decimals} decimals)`,
                expected,
                received,
            };
        }
    }
    else if ((typeof received === 'string' && typeof expected === 'string') ||
        (typeof received === 'boolean' && typeof expected === 'boolean')) {
        // The received types are not numbers, but they have the same type
        if (received === expected) {
            return false;
        }
        else {
            return {
                reason: `The ${typeof expected}s do not match`,
                expected,
                received,
            };
        }
    }
    else if (Array.isArray(received) && Array.isArray(expected)) {
        // Received and expected are arrays
        if (received.length !== expected.length) {
            return {
                reason: 'The arrays length does not match',
                expected: expected.length,
                received: received.length,
            };
        }
        for (let i = 0; i < received.length; i++) {
            const error = recursiveCheck(received[i], expected[i], decimals, strict);
            if (error) {
                return {
                    ...error,
                    ...{
                        reason: `index ${i} - ${error.reason}`,
                    },
                };
            }
        }
        return false;
    }
    else if (expected === null && received === null) {
        // Received and expected are null
        return false;
    }
    else if (expected !== null &&
        typeof expected === 'object' &&
        !Array.isArray(received) &&
        received !== null &&
        typeof received === 'object' &&
        !Array.isArray(expected)) {
        // Received and expected are objects
        const sorter = (a, b) => a.localeCompare(b);
        const receivedKeys = Object.keys(received).sort(sorter);
        const expectedKeys = Object.keys(expected).sort(sorter);
        const sameLength = !strict || receivedKeys.length === expectedKeys.length;
        if (!sameLength ||
            expectedKeys.some(function (e) {
                return !Object.prototype.hasOwnProperty.call(received, e);
            })) {
            return {
                reason: 'The objects do not have similar keys',
                expected: expectedKeys,
                received: receivedKeys,
            };
        }
        for (const prop in expected) {
            const propError = recursiveCheck(received[prop], expected[prop], decimals, strict);
            if (propError) {
                return {
                    ...propError,
                    ...{
                        reason: `key ${prop} - ${propError.reason}`,
                    },
                };
            }
        }
        return false;
    }
    else {
        // Error for all other types
        return {
            reason: 'The current data type is not supported or they do not match',
            expected: typeof expected,
            received: typeof received,
        };
    }
}
exports.recursiveCheck = recursiveCheck;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjdXJzaXZlQ2hlY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcmVjdXJzaXZlQ2hlY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFjQTs7Ozs7O0dBTUc7QUFDSCxTQUFnQixjQUFjLENBQzVCLFFBQWtCLEVBQ2xCLFFBQWtCLEVBQ2xCLFFBQWdCLEVBQ2hCLE1BQU0sR0FBRyxJQUFJO0lBRWIsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxFQUFFO1FBQ2hFLG9DQUFvQztRQUVwQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNuQixPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsQ0FBQyxLQUFLO2dCQUNQLENBQUMsQ0FBQztvQkFDRSxNQUFNLEVBQUUsK0JBQStCLFFBQVEsWUFBWTtvQkFDM0QsUUFBUTtvQkFDUixRQUFRO2lCQUNULENBQUM7U0FDUDthQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDOUIsT0FBTyxRQUFRLEtBQUssUUFBUTtnQkFDMUIsQ0FBQyxDQUFDLEtBQUs7Z0JBQ1AsQ0FBQyxDQUFDO29CQUNFLE1BQU0sRUFBRSxzQkFBc0I7b0JBQzlCLFFBQVE7b0JBQ1IsUUFBUTtpQkFDVCxDQUFDO1NBQ1A7YUFBTSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDbkUsT0FBTyxLQUFLLENBQUM7U0FDZDthQUFNO1lBQ0wsT0FBTztnQkFDTCxNQUFNLEVBQUUsK0JBQStCLFFBQVEsWUFBWTtnQkFDM0QsUUFBUTtnQkFDUixRQUFRO2FBQ1QsQ0FBQztTQUNIO0tBQ0Y7U0FBTSxJQUNMLENBQUMsT0FBTyxRQUFRLEtBQUssUUFBUSxJQUFJLE9BQU8sUUFBUSxLQUFL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