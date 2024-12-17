export * from './datetime';

export const delayMS = async (ms: number): Promise<void> => {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}