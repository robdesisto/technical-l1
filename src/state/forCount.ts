/**
 * Returns a function that will execute
 * the provided operation when called up
 * to and including the max number of times specified.
 *
 * Then will return undefined every time after
 */
export function forCount(operation: () => number, _max: number): () => number | undefined {
    return () => operation();
}