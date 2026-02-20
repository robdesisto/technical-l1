import { MockService } from '../service.mock.ts';

/**
 * Returns a function that will multiply a number each
 * time it is called.
 *
 * Example
 * fn() = 10;
 * fn() = 20;
 * fn() = 30;
 */
export function multiplier(): () => number {
    return () => MockService.randomNumber();
}