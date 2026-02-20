import { mockService } from './service.mock.ts';

/**
 * Return values from apiOne and apiTwo as a tuple
 */
export async function getTwoNumbers(): Promise<number[]> {
    return [await (mockService.apiOne().then(() => mockService.apiTwo()))];
}