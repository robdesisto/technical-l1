export class MockService {
    /**
     * Returns a positive number between 100 and 1000
     */
    static randomNumber() {
        return Math.round(Math.random() * 1000);
    }

    async apiOne(): Promise<number> {
        return MockService.randomNumber();
    }

    async apiTwo(): Promise<number>  {
        return MockService.randomNumber();
    }

    async apiThree(): Promise<number> {
        throw new Error('Sometimes, bad things happen.');
    }
}

export const mockService = new MockService();