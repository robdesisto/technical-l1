import { describe, expect, it } from 'vitest';

import { getDelayedNumber } from './getDelayedNumber.ts';
import { getTwoNumbers } from './getTwoNumbers.ts';
import { getHighestNumber } from './getHighestNumber.ts';

describe('Async', () => {
    describe('getDelayedNumber', () => {
        it('it should return a number after the specified delay', async () => {
            const result = await getDelayedNumber(0);
            expect(isNaN(result)).toBeFalsy();
       });
    });

    describe('getTwoNumbers', () => {
        it('it should return two numbers as an array', async () => {
           const result = await getTwoNumbers();

           expect(Array.isArray(result)).toBeTruthy();
           expect(result.length).toBe(2);
        });
    });

    describe('getHighestNumber', () => {
        it('should return the highers number', async () => {
            const { result, data } = await getHighestNumber();

            expect(result).toBeGreaterThan(0);

            const greaterValue = data.find(v => v > result);
            expect(greaterValue).toBeFalsy();
        });
    });
});