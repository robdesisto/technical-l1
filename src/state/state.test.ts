import { describe, expect, it } from 'vitest';

import { forCount } from './forCount.ts';
import { multiplier } from './multiplier.ts';

describe('state', () => {
   describe('multiplier', () => {
      it('should multiple a value each time it is called', () => {
          const multiply = multiplier();

          const result1 = multiply();
          expect(result1).toBeGreaterThan(0);

          const result2 = multiply();
          expect(result2).toBe(result1 * 2);

          const result3 = multiply();
          expect(result3).toBe(result1 * 3);
      });
   });

   describe('forCount', () => {
      it('should multiply only twice', () => {
         const multiplyForCount = forCount(multiplier(), 2);

         const result1 = multiplyForCount();
         expect(result1).toBeGreaterThan(0);

          const result2 = multiplyForCount();
          expect(result2).toBeGreaterThan(0);

          const result3 = multiplyForCount();
          expect(result3).toBe(undefined);
      });
   });
});