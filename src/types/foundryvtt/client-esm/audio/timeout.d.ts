/**
 * A framework for scheduled audio events with more precise and synchronized timing than using window.setTimeout.
 * This approach creates an empty audio buffer of the desired duration played using the shared game audio context.
 * The onended event of the AudioBufferSourceNode provides a very precise way to synchronize audio events.
 * For audio timing, this is preferable because it avoids numerous issues with window.setTimeout.
 *
 * @example Using a callback function
 * ```js
 * function playForDuration(sound, duration) {
 *   sound.play();
 *   const wait = new AudioTimeout(duration, () => sound.stop())
 * }
 * ```
 *
 * @example Using an awaited Promise
 * ```js
 * async function playForDuration(sound, duration) {
 *   sound.play();
 *   const timeout = new AudioTimeout(delay);
 *   await timeout.complete;
 *   sound.stop();
 * }
 * ```
 *
 * @example Using the wait helper
 * ```js
 * async function playForDuration(sound, duration) {
 *   sound.play();
 *   await AudioTimeout.wait(duration);
 *   sound.stop();
 * }
 * ```
 */
export default class AudioTimeout {
    /**
     * Schedule a task according to some audio timeout.
     * @see {@link AudioTimeout#constructor}
     * @param {number} delayMS          A desired delay timing in milliseconds
     * @param {Function} [callback]     An optional callback function which is executed at the end of the delay
     * @param {object} [options]        Additional options which modify timeout behavior
  
     * @returns {Promise<*>}            A promise which resolves as void or as the returned value of the callback
     */
    static wait(delayMS: number, callback?: Function, options?: object): Promise<any>;
    /**
     * Create an AudioTimeout by providing a delay and callback.
     * @param {number} delayMS          A desired delay timing in milliseconds
     * @param {Function} [callback]     An optional callback function which is executed at the end of the delay
     * @param {object} [options]        Additional options which modify timeout behavior
     * @param {AudioContext} [options.context]  The AudioContext within which the timing should be kept. Uses the
     *                                          shared game audio context by default.
     */
    constructor(delayMS: number, callback?: Function, { context }?: {
        context?: AudioContext;
    });
    /**
     * Is the timeout complete?
     * This can be used to await the completion of the AudioTimeout if necessary.
     * The Promise resolves to the returned value of the provided callback function.
     * @type {Promise<*>}
     */
    complete: Promise<any>;
    /**
     * Cancel an AudioTimeout by ending it early, rejecting its completion promise, and skipping any callback function.
     */
    cancel(): void;
    /**
     * End the timeout, either on schedule or prematurely. Executing any callback function
     */
    end(): void;
    #private;
}
