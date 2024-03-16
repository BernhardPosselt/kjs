/** @typedef {import("./_types.mjs").AudioBufferCacheEntry} AudioBufferCacheEntry

 /**
 * A specialized cache used for audio buffers.
 * This is an LRU cache which expires buffers from the cache once the maximum cache size is exceeded.
 */
export default class AudioBufferCache extends Map<any, any> {
    /**
     * Construct an AudioBufferCache providing a maximum disk size beyond which entries are expired.
     * @param {number} [cacheSize]    The maximum cache size in bytes. 1GB by default.
     * @returns {Map<string, AudioBufferCacheEntry>}
     */
    constructor(cacheSize?: number);
    /**
     * A string representation of the current cache utilization.
     * @type {{current: number, max: number, pct: number, currentString: string, maxString: string, pctString: string}}
     */
    get usage(): {
        current: number;
        max: number;
        pct: number;
        currentString: string;
        maxString: string;
        pctString: string;
    };
    /**
     * Retrieve an AudioBuffer from the cache.
     * @param {string} src      The audio buffer source path
     * @returns {AudioBuffer}   The cached audio buffer, or undefined
     */
    get(src: string): AudioBuffer;
    /**
     * Insert an AudioBuffer into the buffers cache.
     * @param {string} src          The audio buffer source path
     * @param {AudioBuffer} buffer  The audio buffer to insert
     * @returns {AudioBufferCache}
     */
    set(src: string, buffer: AudioBuffer): AudioBufferCache;
    /**
     * Delete an entry from the cache.
     * @param {string} src          The audio buffer source path
     * @returns {boolean}           Was the buffer deleted from the cache?
     */
    delete(src: string): boolean;
    /**
     * Lock a buffer, preventing it from being expired even if it is least-recently-used.
     * @param {string} src              The audio buffer source path
     * @param {boolean} [locked=true]   Lock the buffer, preventing its expiration?
     */
    lock(src: string, locked?: boolean): void;
    #private;
}
/**
 * /**
 * A specialized cache used for audio buffers.
 * This is an LRU cache which expires buffers from the cache once the maximum cache size is exceeded.
 */
export type AudioBufferCacheEntry = import("./_types.mjs").AudioBufferCacheEntry;
