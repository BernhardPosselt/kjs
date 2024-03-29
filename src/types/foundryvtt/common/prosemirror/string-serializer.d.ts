/**
 * @callback ProseMirrorNodeOutput
 * @param {Node} node        The ProseMirror node.
 * @returns {DOMOutputSpec}  The specification to build a DOM node for this ProseMirror node.
 */
/**
 * @callback ProseMirrorMarkOutput
 * @param {Mark} mark        The ProseMirror mark.
 * @param {boolean} inline   Is the mark appearing in an inline context?
 * @returns {DOMOutputSpec}  The specification to build a DOM node for this ProseMirror mark.
 */
/**
 * A class responsible for serializing a ProseMirror document into a string of HTML.
 */
export default class StringSerializer {
    /**
     * Build a serializer for the given schema.
     * @param {Schema} schema  The ProseMirror schema.
     * @returns {StringSerializer}
     */
    static fromSchema(schema: Schema): StringSerializer;
    /**
     * @param {Object<ProseMirrorNodeOutput>} nodes  The node output specs.
     * @param {Object<ProseMirrorMarkOutput>} marks  The mark output specs.
     */
    constructor(nodes: any, marks: any);
    /**
     * Create a StringNode from a ProseMirror DOMOutputSpec.
     * @param {DOMOutputSpec} spec                            The specification.
     * @param {boolean} inline                                Whether this is a block or inline node.
     * @returns {{outer: StringNode, [content]: StringNode}}  An object describing the outer node, and a reference to the
     *                                                        child node where content should be appended, if applicable.
     * @protected
     */
    protected _specToStringNode(spec: DOMOutputSpec, inline: boolean): {
        outer: StringNode;
    };
    /**
     * Serialize a ProseMirror fragment into an HTML string.
     * @param {Fragment} fragment    The ProseMirror fragment, a collection of ProseMirror nodes.
     * @param {StringNode} [target]  The target to append to. Not required for the top-level invocation.
     * @returns {StringNode}         A DOM tree representation as a StringNode.
     */
    serializeFragment(fragment: Fragment, target?: StringNode): StringNode;
    /**
     * Convert a ProseMirror node representation to a StringNode.
     * @param {Node} node  The ProseMirror node.
     * @returns {StringNode}
     * @protected
     */
    protected _toStringNode(node: Node): StringNode;
    /**
     * Convert a ProseMirror mark representation to a StringNode.
     * @param {Mark} mark       The ProseMirror mark.
     * @param {boolean} inline  Does the mark appear in an inline context?
     * @returns {{outer: StringNode, [content]: StringNode}}
     * @protected
     */
    protected _serializeMark(mark: Mark, inline: boolean): {
        outer: StringNode;
        [content]: StringNode;
    };
    #private;
}
export type ProseMirrorNodeOutput = (node: Node) => DOMOutputSpec;
export type ProseMirrorMarkOutput = (mark: Mark, inline: boolean) => DOMOutputSpec;
/**
 * A class that behaves like a lightweight DOM node, allowing children to be appended. Serializes to an HTML string.
 */
declare class StringNode {
    /**
     * A list of HTML void elements that do not have a closing tag.
     * @type {Set<string>}
     */
    static "__#31@#VOID": Set<string>;
    /**
     * Escape HTML tags within string content.
     * @param {string} content  The string content.
     * @returns {string}
     */
    static "__#31@#escapeHTML"(content: string): string;
    /**
     * @param {string} [tag]            The tag name. If none is provided, this node's children will not be wrapped in an
     *                                  outer tag.
     * @param {Object<string>} [attrs]  The tag attributes.
     * @param {boolean} [inline=false]  Whether the node appears inline or as a block.
     */
    constructor(tag?: string, attrs?: any, inline?: boolean);
    /**
     * Whether the node appears inline or as a block.
     */
    get inline(): boolean;
    /**
     * Append a child to this string node.
     * @param {StringNode|string} child  The child node or string.
     * @throws If attempting to append a child to a void element.
     */
    appendChild(child: StringNode | string): void;
    /**
     * Serialize the StringNode structure into a single string.
     * @param {string|number} spaces  The number of spaces to use for indentation (maximum 10). If this value is a string,
     *                                that string is used as indentation instead (or the first 10 characters if it is
     *                                longer).
     */
    toString(spaces?: string | number, { _depth, _inlineParent }?: {
        _depth?: number;
        _inlineParent?: boolean;
    }): any;
    #private;
}
export {};
