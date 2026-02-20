import { mockService } from './service.mock.ts';

export async function getDelayedNumber(delay = 0): Promise<any> {
    setTimeout(() => {
        return mockService.apiOne();
    }, delay);
}