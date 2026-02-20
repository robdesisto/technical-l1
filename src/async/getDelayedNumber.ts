import { mockService } from '../service.mock.ts';

/**
 * Returns a positive number after the specified delay
 */
export async function getDelayedNumber(delay = 0): Promise<number> {
   return  setTimeout(() => {
        return mockService.apiOne();
    }, delay);
}