declare const ApplicationV2_base: {
    new (...args: any[]): {
        [x: string]: any;
        "__#21@#events": {
            [x: string]: Map<import("../../../common/utils/event-emitter.mjs").EmittedEventListener, {
                fn: import("../../../common/utils/event-emitter.mjs").EmittedEventListener;
                once: boolean;
            }>;
        };
        addEventListener(type: string, listener: import("../../../common/utils/event-emitter.mjs").EmittedEventListener, { once }?: {
            once?: boolean;
        }): void;
        removeEventListener(type: string, listener: import("../../../common/utils/event-emitter.mjs").EmittedEventListener): void;
        dispatchEvent(event: Event): boolean;
    };
    emittedEvents: string[];
} & ObjectConstructor;
/**
 * @typedef {import("../types").ApplicationConfigurationOptions} ApplicationConfigurationOptions
 * @typedef {import("../types").ApplicationRenderOptions} ApplicationRenderOptions
 * @typedef {import("../types").ApplicationClosingOptions} ApplicationClosingOptions
 * @typedef {import("../types").ApplicationPosition} ApplicationPosition
 */
/**
 * The Application class is responsible for rendering an HTMLElement into the Foundry Virtual Tabletop user interface.
 * @alias foundry.applications.api.ApplicationV2
 */
export default class ApplicationV2 extends ApplicationV2_base {
    /**
     * Designates which upstream Application class in this class' inheritance chain is the base application.
     * Any DEFAULT_OPTIONS of super-classes further upstream of the BASE_APPLICATION are ignored.
     * Hook events for super-classes further upstream of the BASE_APPLICATION are not dispatched.
     * @type {typeof ApplicationV2}
     */
    static BASE_APPLICATION: typeof ApplicationV2;
    /**
     * The default configuration options which are assigned to every instance of this Application class.
     * @type {ApplicationConfigurationOptions}
     */
    static DEFAULT_OPTIONS: any;
    /**
     * The sequence of rendering states that describe the Application life-cycle.
     * @enum {number}
     */
    static RENDER_STATES: Readonly<{
        CLOSING: -2;
        CLOSED: -1;
        NONE: 0;
        RENDERING: 1;
        RENDERED: 2;
        ERROR: 3;
    }>;
    /**
     * Iterate over the inheritance chain of this Application.
     * The chain includes this Application itself and all parents until the base application is encountered.
     * @see ApplicationV2.BASE_APPLICATION
     * @generator
     * @yields {typeof ApplicationV2}
     */
    static inheritanceChain(): Generator<typeof ApplicationV2, void, unknown>;
    /**
     * Application configuration options
     * @type {ApplicationConfigurationOptions}
     */
    options: any;
    /**
     * The CSS class list of this Application instance
     * @type {DOMTokenList}
     */
    get classList(): DOMTokenList;
    /**
     * The HTML element ID of this Application instance.
     * @type {string}
     */
    get id(): string;
    /**
     * The HTMLElement which renders this Application into the DOM.
     * @type {HTMLElement}
     */
    get element(): HTMLElement;
    /**
     * Is this Application instance currently minimized?
     * @type {boolean}
     */
    get minimized(): boolean;
    /**
     * The current position of the application with respect to the window.document.body.
     * @type {ApplicationPosition}
     */
    position: any;
    /**
     * Is this Application instance currently rendered?
     * @type {boolean}
     */
    get rendered(): boolean;
    /**
     * The current render state of the Application.
     * @type {ApplicationV2.RENDER_STATES}
     */
    get state(): Readonly<{
        CLOSING: -2;
        CLOSED: -1;
        NONE: 0;
        RENDERING: 1;
        RENDERED: 2;
        ERROR: 3;
    }>;
    /**
     * Initialize configuration options for the Application instance.
     * The default behavior of this method is to intelligently merge options for each class with those of their parents.
     * - Array-based options are concatenated
     * - Inner objects are merged
     * - Otherwise, properties in the subclass replace those defined by a parent
     * @param {Partial<ApplicationConfigurationOptions>} options      Options provided directly to the constructor
     * @returns {ApplicationConfigurationOptions}                     Configured options for the application instance
     * @protected
     */
    protected _initializeApplicationOptions(options: any): any;
    /**
     * Render the Application, creating its HTMLElement and replacing its innerHTML.
     * Add it to the DOM if it is not currently rendered and rendering is forced. Otherwise, re-render its contents.
     * @param {boolean|ApplicationRenderOptions} [options]  Options which configure application rendering behavior.
     *                                                      A boolean is interpreted as the "force" option.
     * @returns {Promise<ApplicationV2>}            A Promise which resolves to the rendered Application instance
     */
    render(options?: boolean | ApplicationRenderOptions): Promise<ApplicationV2>;
    /**
     * Render an HTMLElement for the Application.
     * Subclasses should override this method to customize rendering behavior.
     * @see ApplicationV2#render
     * @param {ApplicationRenderOptions} options    Options which configure application rendering behavior
     * @returns {Promise<HTMLElement>}              A Promise which resolves to a rendered HTMLElement
     * @abstract
     */
    _renderHTML(options: any): Promise<HTMLElement>;
    /**
     * Insert the application HTML element into the DOM.
     * Subclasses may override this method to customize how the application is inserted.
     * @param {HTMLElement} element                 The element to insert
     * @param {HTMLElement} [prior]                 A prior element being replaced
     * @returns {HTMLElement}                       The inserted element
     * @protected
     */
    protected _insertElement(element: HTMLElement, prior?: HTMLElement): HTMLElement;
    /**
     * Close the Application, removing it from the DOM.
     * @param {ApplicationClosingOptions} [options] Options which modify how the application is closed.
     * @returns {Promise<ApplicationV2>}            A Promise which resolves to the closed Application instance
     */
    close(options?: any): Promise<ApplicationV2>;
    /**
     * Remove the application HTML element from the DOM.
     * Subclasses may override this method to customize how the application element is removed.
     * @param {HTMLElement} element                 The element to be removed
     * @protected
     */
    protected _removeElement(element: HTMLElement): void;
    /**
     * Update the Application element position using provided data which is merged with the prior position.
     * @returns {ApplicationPosition}               The updated application position
     */
    setPosition(position: any): any;
    /**
     * A protected method which subclasses can override to customize positioning behavior.
     * @see ApplicationV2#setPosition
     * @protected
     */
    protected _updatePosition(): any;
    /**
     * Actions performed before a first render of the Application.
     * @param {ApplicationRenderOptions} options      Provided render options
     * @returns {Promise<void>}
     * @protected
     */
    protected _preFirstRender(options: any): Promise<void>;
    /**
     * Actions performed after a first render of the Application.
     * Post-render steps are not awaited by the render process.
     * @param {ApplicationRenderOptions} options      Provided render options
     * @protected
     */
    protected _onFirstRender(options: any): void;
    /**
     * Actions performed before any render of the Application.
     * Pre-render steps are awaited by the render process.
     * @param {ApplicationRenderOptions} options      Provided render options
     * @returns {Promise<void>}
     * @protected
     */
    protected _preRender(options: any): Promise<void>;
    /**
     * Actions performed after any render of the Application.
     * Post-render steps are not awaited by the render process.
     * @param {ApplicationRenderOptions} options      Provided render options
     * @protected
     */
    protected _onRender(options: any): void;
    /**
     * Actions performed before closing the Application.
     * Pre-close steps are awaited by the close process.
     * @param {ApplicationRenderOptions} options      Provided render options
     * @returns {Promise<void>}
     * @protected
     */
    protected _preClose(options: any): Promise<void>;
    /**
     * Actions performed after closing the Application.
     * Post-close steps are not awaited by the close process.
     * @param {ApplicationRenderOptions} options      Provided render options
     * @protected
     */
    protected _onClose(options: any): void;
    /**
     * Actions performed before the Application is re-positioned.
     * Pre-position steps are not awaited because setPosition is synchronous.
     * @param {ApplicationPosition} position          The requested application position
     * @protected
     */
    protected _prePosition(position: any): void;
    /**
     * Actions performed after the Application is re-positioned.
     * @param {ApplicationPosition} position          The requested application position
     * @protected
     */
    protected _onPosition(position: any): void;
    /**
     * An application identifier which is a unique incrementing integer.
     * This shares the same counter as the v1 Application class.
     * @type {number}
     */
    get appId(): number;
    #private;
}
export type ApplicationConfigurationOptions = any;
export type ApplicationRenderOptions = any;
export type ApplicationClosingOptions = any;
export type ApplicationPosition = any;
export {};
