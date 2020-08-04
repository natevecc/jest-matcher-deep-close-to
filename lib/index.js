"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jest_matcher_utils_1 = require("jest-matcher-utils");
const recursiveCheck_1 = require("./recursiveCheck");
function printResponse(error, received, expected) {
    /* istanbul ignore next */
    if (error) {
        return {
            message: () => `${jest_matcher_utils_1.matcherHint('.toBeDeepCloseTo')}\n\n` +
                `${error.reason}:\n` +
                `  ${jest_matcher_utils_1.printExpected(error.expected)}\n` +
                'Received:\n' +
                `  ${jest_matcher_utils_1.printReceived(error.received)}\n` +
                `Full diff: \n${jest_matcher_utils_1.printDiffOrStringify(expected, received, 'Expected', 'Received', true)}`,
            pass: false,
        };
    }
    else {
        return {
            message: () => `${jest_matcher_utils_1.matcherHint('.not.toBeDeepCloseTo')}\n\n` +
                'The two objects are deeply equal:\n' +
                `  ${jest_matcher_utils_1.printExpected(expected)}\n` +
                'Received:\n' +
                `  ${jest_matcher_utils_1.printReceived(received)}`,
            pass: true,
        };
    }
}
function toBeDeepCloseTo(received, expected, decimals) {
    if (decimals === undefined) {
        decimals = 10;
    }
    const error = recursiveCheck_1.recursiveCheck(received, expected, decimals);
    return printResponse(error, received, expected);
}
exports.toBeDeepCloseTo = toBeDeepCloseTo;
function toMatchCloseTo(received, expected, decimals) {
    if (decimals === undefined) {
        decimals = 10;
    }
    const error = recursiveCheck_1.recursiveCheck(received, expected, decimals, false);
    return printResponse(error, received, expected);
}
exports.toMatchCloseTo = toMatchCloseTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyREFLNEI7QUFFNUIscURBQW1FO0FBT25FLFNBQVMsYUFBYSxDQUNwQixLQUFvQixFQUNwQixRQUFrQixFQUNsQixRQUFrQjtJQUVsQiwwQkFBMEI7SUFDMUIsSUFBSSxLQUFLLEVBQUU7UUFDVCxPQUFPO1lBQ0wsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUNaLEdBQUcsZ0NBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNO2dCQUN4QyxHQUFHLEtBQUssQ0FBQyxNQUFNLEtBQUs7Z0JBQ3BCLEtBQUssa0NBQWEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUk7Z0JBQ3RDLGFBQWE7Z0JBQ2IsS0FBSyxrQ0FBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSTtnQkFDdEMsZ0JBQWdCLHlDQUFvQixDQUNsQyxRQUFRLEVBQ1IsUUFBUSxFQUNSLFVBQVUsRUFDVixVQUFVLEVBQ1YsSUFBSSxDQUNMLEVBQUU7WUFDTCxJQUFJLEVBQUUsS0FBSztTQUNaLENBQUM7S0FDSDtTQUFNO1FBQ0wsT0FBTztZQUNMLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FDWixHQUFHLGdDQUFXLENBQUMsc0JBQXNCLENBQUMsTUFBTTtnQkFDNUMscUNBQXFDO2dCQUNyQyxLQUFLLGtDQUFhLENBQUMsUUFBUSxDQUFDLElBQUk7Z0JBQ2hDLGFBQWE7Z0JBQ2IsS0FBSyxrQ0FBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2hDLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQztLQUNIO0FBQ0gsQ0FBQztBQUVELFNBQWdCLGVBQWUsQ0FDN0IsUUFBa0IsRUFDbEIsUUFBa0IsRUFDbEIsUUFBaUI7SUFFakIsSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO1FBQzFCLFFBQVEsR0FBRyxFQUFFLENBQUM7S0FDZjtJQUNELE1BQU0sS0FBSyxHQUFHLCtCQUFjLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMzRCxPQUFPLGFBQWEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFWRCwwQ0FVQztBQUVELFNBQWdCLGNBQWMsQ0FDNUIsUUFBa0IsRUFDbEIsUUFBa0IsRUFDbEIsUUFBaUI7SUFFakIsSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO1FBQzFCLFFBQVEsR0FBRyxFQUFFLENBQUM7S0FDZjtJQUNELE1BQU0sS0FBSyxHQUFHLCtCQUFjLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEUsT0FBTyxhQUFhLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBVkQsd0NBVUMifQ==