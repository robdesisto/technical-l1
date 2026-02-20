import { mockService } from '../service.mock.ts';

/**
 * Returns the highest positive number of the three endpoints
 * as well as the raw data in the format
 * { result: number, data: number[] }
 */
export async function getHighestNumber(): Promise<{ result: number, data: number[] }> {
    const data = await Promise.all([
        mockService.apiOne(),
        mockService.apiTwo(),
        mockService.apiThree()
    ]);

    const result = data.sort()[0];

    return { result, data };
}