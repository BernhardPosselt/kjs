export type AudioBufferCacheEntry = {
    src: string;
    buffer: AudioBuffer;
    size: number;
    locked?: boolean;
    next?: AudioBufferCacheEntry;
    previous?: AudioBufferCacheEntry;
};
export type SoundPlaybackOptions = {
    /**
     * A delay in seconds by which to delay playback
     */
    delay?: number;
    /**
     * A limited duration in seconds for which to play
     */
    duration?: number;
    /**
     * A duration in milliseconds over which to fade in playback
     */
    fade?: number;
    /**
     * Should sound playback loop?
     */
    loop?: boolean;
    /**
     * Seconds of the AudioBuffer when looped playback should start.
     *            Only works for AudioBufferSourceNode.
     */
    loopStart?: number;
    /**
     * Seconds of the Audio buffer when looped playback should restart.
     *                Only works for AudioBufferSourceNode.
     */
    loopEnd?: number;
    /**
     * An offset in seconds at which to start playback
     */
    offset?: number;
    /**
     * A callback function attached to the source node
     */
    onended?: Function | null;
    /**
     * The volume at which to play the sound
     */
    volume?: number;
};
export type SoundScheduleCallback = (sound: Sound) => any;
