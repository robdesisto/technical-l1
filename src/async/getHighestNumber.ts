import { mockService } from '../service.mock.ts';

/**
 * Returns the highest number of the three endpoints
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