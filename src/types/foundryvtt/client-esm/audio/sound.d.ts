declare const Sound_base: {
    new (...args: any[]): {
        [x: string]: any;
        "__#21@#events": {
            [x: string]: Map<import("../../common/utils/event-emitter.mjs").EmittedEventListener, {
                fn: import("../../common/utils/event-emitter.mjs").EmittedEventListener;
                once: boolean;
            }>;
        };
        addEventListener(type: string, listener: import("../../common/utils/event-emitter.mjs").EmittedEventListener, { once }?: {
            once?: boolean;
        }): void;
        removeEventListener(type: string, listener: import("../../common/utils/event-emitter.mjs").EmittedEventListener): void;
        dispatchEvent(event: Event): boolean;
    };
    emittedEvents: string[];
} & ObjectConstructor;
/**
 * @typedef {import("./_types.mjs").SoundPlaybackOptions} SoundPlaybackOptions
 * @typedef {import("./_types.mjs").SoundScheduleCallback} SoundScheduleCallback
 */
/**
 * A container around an AudioNode which manages sound playback in Foundry Virtual Tabletop.
 * Each Sound is either an AudioBufferSourceNode (for short sources) or a MediaElementAudioSourceNode (for long ones).
 * This class provides an interface around both types which allows standardized control over playback.
 * @alias foundry.audio.Sound
 */
export default class Sound extends Sound_base {
    /**
     * The sequence of container loading states.
     * @enum {Readonly<number>}
     */
    static STATES: Readonly<{
        FAILED: -1;
        NONE: 0;
        LOADING: 1;
        LOADED: 2;
        PLAYING: 3;
        PAUSED: 4;
        STOPPED: 5;
    }>;
    /**
     * The maximum duration, in seconds, for which an AudioBufferSourceNode will be used.
     * Otherwise, a MediaElementAudioSourceNode will be used.
     * @type {number}
     */
    static MAX_BUFFER_DURATION: number;
    /**
     * An incrementing counter used to assign each Sound a unique id.
     * @type {number}
     */
    static "__#36@#nodeId": number;
    /**
     * Ensure to safely unload a media stream
     * @param {HTMLAudioElement} element      The audio element to unload
     */
    static "__#36@#unloadAudioElement"(element: HTMLAudioElement): void;
    /**
     * @deprecated since v12
     * @ignore
     */
    static get LOAD_STATES(): Readonly<{
        FAILED: -1;
        NONE: 0;
        LOADING: 1;
        LOADED: 2;
        PLAYING: 3;
        PAUSED: 4;
        STOPPED: 5;
    }>;
    /**
     * Construct a Sound by providing the source URL and other options.
     * @param {string} src                    The audio source path, either a relative path or a remote URL
     * @param {object} [options]              Additional options which configure the Sound
     * @param {AudioContext} [options.context]  A non-default audio context within which the sound should play
     * @param {boolean} [options.forceBuffer]   Force use of an AudioBufferSourceNode even if the audio duration is long
     */
    constructor(src: string, { context, forceBuffer }?: {
        context?: AudioContext;
        forceBuffer?: boolean;
    });
    /**
     * A unique integer identifier for this sound.
     * @type {number}
     */
    id: number;
    /**
     * The audio source path.
     * Either a relative path served by the running Foundry VTT game server or a remote URL.
     * @type {string}
     */
    src: string;
    /**
     * The audio context within which this Sound is played.
     * @type {AudioContext}
     */
    get context(): AudioContext;
    /**
     * The AudioSourceNode used to control sound playback.
     * @type {AudioBufferSourceNode|MediaElementAudioSourceNode}
     */
    sourceNode: AudioBufferSourceNode | MediaElementAudioSourceNode;
    /**
     * The GainNode used to control volume for this sound.
     * @type {GainNode}
     */
    gainNode: GainNode;
    /**
     * An AudioBuffer instance, if this Sound uses an AudioBufferSourceNode for playback.
     * @type {AudioBuffer|null}
     */
    buffer: AudioBuffer | null;
    /**
     * An HTMLAudioElement, if this Sound uses a MediaElementAudioSourceNode for playback.
     * @type {HTMLAudioElement|null}
     */
    element: HTMLAudioElement | null;
    /**
     * The life-cycle state of the sound.
     * @see {@link Sound.STATES}
     * @type {number}
     * @protected
     */
    protected _state: number;
    /**
     * Has the audio file been loaded either fully or for streaming.
     * @type {boolean}
     */
    get loaded(): boolean;
    /**
     * Did the audio file fail to load.
     * @type {boolean}
     */
    get failed(): boolean;
    /**
     * Is this sound currently playing?
     * @type {boolean}
     */
    get playing(): boolean;
    /**
     * Does this Sound use an AudioBufferSourceNode?
     * Otherwise, the Sound uses a streamed MediaElementAudioSourceNode.
     * @type {boolean}
     */
    get isBuffer(): boolean;
    /**
     * A convenience reference to the GainNode gain audio parameter.
     * @type {AudioParam}
     */
    get gain(): AudioParam;
    /**
     * The AudioNode destination which is the output target for the Sound.
     * @type {AudioNode}
     */
    destination: AudioNode;
    /**
     * A pipeline of AudioNode instances to be applied to Sound playback.
     * @type {AudioNode[]}
     */
    effects: AudioNode[];
    set volume(arg: number);
    /**
     * The currently playing volume of the sound.
     * Undefined until playback has started for the first time.
     * @type {number}
     */
    get volume(): number;
    /**
     * The time in seconds at which playback was started.
     * @type {number}
     */
    startTime: number;
    /**
     * The time in seconds at which playback was paused.
     * @type {number}
     */
    pausedTime: number;
    /**
     * The total duration of the audio source in seconds.
     * @type {number}
     */
    get duration(): number;
    /**
     * The current playback time of the sound.
     * @type {number}
     */
    get currentTime(): number;
    set loop(arg: boolean);
    /**
     * Is the sound looping?
     * @type {boolean}
     */
    get loop(): boolean;
    /**
     * Load the audio source and prepare it for playback, either using an AudioBuffer or a streamed HTMLAudioElement.
     * @param {object} [options={}]   Additional options which affect resource loading
     * @param {boolean} [options.autoplay=false]  Automatically begin playback of the sound once loaded
     * @param {SoundPlaybackOptions} [options.autoplayOptions]  Playback options passed to Sound#play, if autoplay
     * @returns {Promise<Sound>}      A Promise which resolves to the Sound once it is loaded
     */
    load({ autoplay, autoplayOptions }?: {
        autoplay?: boolean;
        autoplayOptions?: SoundPlaybackOptions;
    }): Promise<Sound>;
    /**
     * An inner method which handles loading so that it can be de-duplicated under a single shared Promise resolution.
     * This method is factored out to allow for subclasses to override loading behavior.
     * @returns {Promise<void>}                       A Promise which resolves once the sound is loaded
     * @protected
     */
    protected _load(): Promise<void>;
    /**
     * Begin playback for the Sound.
     * This method is asynchronous because playback may not start until after an initially provided delay.
     * The Promise resolves *before* the fade-in of any configured volume transition.
     * @param {SoundPlaybackOptions} [options]  Options which configure the beginning of sound playback
     * @returns {Promise<Sound>}                A Promise which resolves once playback has started (excluding fade)
     */
    play(options?: SoundPlaybackOptions, ...args: any[]): Promise<Sound>;
    /**
     * Begin playback for the configured pipeline and playback options.
     * This method is factored out so that subclass implementations of Sound can implement alternative behavior.
     * @returns {Promise<void>}
     * @protected
     */
    protected _play(): Promise<void>;
    /**
     * Pause playback of the Sound.
     * For AudioBufferSourceNode this stops playback after recording the current time.
     * Calling Sound#play will resume playback from the pausedTime unless some other offset is passed.
     * For a MediaElementAudioSourceNode this simply calls the HTMLAudioElement#pause method directly.
     */
    pause(): void;
    /**
     * Pause playback of the Sound.
     * This method is factored out so that subclass implementations of Sound can implement alternative behavior.
     * @protected
     */
    protected _pause(): void;
    /**
     * Stop playback for the Sound.
     * This method is asynchronous because playback may not stop until after an initially provided delay.
     * The Promise resolves *after* the fade-out of any configured volume transition.
     * @param {SoundPlaybackOptions} [options]  Options which configure the stopping of sound playback
     * @returns {Promise<Sound>}                A Promise which resolves once playback is fully stopped (including fade)
     */
    stop(options?: SoundPlaybackOptions): Promise<Sound>;
    /**
     * Stop playback of the Sound.
     * This method is factored out so that subclass implementations of Sound can implement alternative behavior.
     * @protected
     */
    protected _stop(): Promise<void>;
    /**
     * Fade the volume for this sound between its current level and a desired target volume.
     * @param {number} volume                     The desired target volume level between 0 and 1
     * @param {object} [options={}]               Additional options that configure the fade operation
     * @param {number} [options.duration=1000]      The duration of the fade effect in milliseconds
     * @param {number} [options.from]               A volume level to start from, the current volume by default
     * @param {string} [options.type=linear]        The type of fade easing, "linear" or "exponential"
     * @returns {Promise<void>}                   A Promise that resolves after the requested fade duration
     */
    fade(volume: number, { duration, from, type }?: {
        duration?: number;
        from?: number;
        type?: string;
    }): Promise<void>;
    /**
     * Schedule a function to occur at the next occurrence of a specific playbackTime for this Sound.
     * @param {SoundScheduleCallback} fn  A function that will be called with this Sound as its single argument
     * @param {number} playbackTime       The desired playback time at which the function should be called
     * @returns {Promise<any>}            A Promise which resolves to the returned value of the provided function once
     *                                    it has been evaluated.
     *
     * @example Schedule audio playback changes
     * ```js
     * sound.schedule(() => console.log("Do something exactly 30 seconds into the track"), 30);
     * sound.schedule(() => console.log("Do something next time the track loops back to the beginning"), 0);
     * sound.schedule(() => console.log("Do something 5 seconds before the end of the track"), sound.duration - 5);
     * ```
     */
    schedule(fn: SoundScheduleCallback, playbackTime: number): Promise<any>;
    /**
     * Update the array of effects applied to a Sound instance.
     * Optionally a new array of effects can be assigned. If no effects are passed, the current effects are re-applied.
     * @param {AudioNode[]} [effects]     An array of AudioNode effects to apply
     */
    applyEffects(effects?: AudioNode[]): void;
    /**
     * Create any AudioNode instances required for playback of this Sound.
     * @protected
     */
    protected _createNodes(): void;
    /**
     * Create the audio pipeline used to play this Sound.
     * The GainNode is reused each time to link volume changes across multiple playbacks.
     * The AudioSourceNode is re-created every time that Sound#play is called.
     * @protected
     */
    protected _connectPipeline(): void;
    /**
     * Disconnect the audio pipeline once playback is stopped.
     * Walk backwards along the Sound##pipeline from the Sound#destination, disconnecting each node.
     * @protected
     */
    protected _disconnectPipeline(): void;
    /**
     * @deprecated since v12
     * @ignore
     */
    get loadState(): number;
    /**
     * @deprecated since v12
     * @ignore
     */
    get container(): this;
    /**
     * @deprecated since v12
     * @ignore
     */
    get node(): AudioBufferSourceNode | MediaElementAudioSourceNode;
    /**
     * @deprecated since v12
     * @ignore
     */
    on(eventName: any, fn: any, { once }?: {
        once?: boolean;
    }): void;
    /**
     * @deprecated since v12
     * @ignore
     */
    off(eventName: any, fn: any): void;
    /**
     * @deprecated since v12
     * @ignore
     */
    emit(eventName: any): boolean;
    #private;
}
export type SoundPlaybackOptions = import("./_types.mjs").SoundPlaybackOptions;
export type SoundScheduleCallback = import("./_types.mjs").SoundScheduleCallback;
export {};
