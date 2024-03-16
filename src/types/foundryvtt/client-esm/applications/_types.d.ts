export type ApplicationPosition = {
    /**
     * Window offset pixels from top
     */
    top: number;
    /**
     * Window offset pixels from left
     */
    left: number;
    /**
     * Un-scaled pixels in width or "auto"
     */
    width: number | "auto";
    /**
     * Un-scaled pixels in height or "auto"
     */
    height: number | "auto";
    /**
     * A numeric scaling factor applied to application dimensions
     */
    scale: number;
    /**
     * A z-index of the application relative to siblings
     */
    zIndex: number;
};
export type ApplicationConfigurationOptions = {
    /**
     * An HTML element identifier used for this Application instance
     */
    id?: string;
    /**
     * An array of CSS classes to apply to the Application
     */
    classes?: string[];
    /**
     * The default position for instances of this Application
     */
    position?: ApplicationPosition;
    /**
     * Does this Application render inside a window frame?
     */
    window?: boolean;
};
export type ApplicationRenderOptions = {
    /**
     * Force application rendering. If true, an application which does not
     *             yet exist in the DOM is added. If false, only applications which
     *             already exist are rendered.
     */
    force?: boolean;
    /**
     * A specific position at which to render the Application.
     */
    position?: ApplicationPosition;
};
export type ApplicationClosingOptions = any;
