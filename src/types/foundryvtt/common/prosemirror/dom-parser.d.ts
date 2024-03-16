export default class DOMParser extends BaseDOMParser {
    /** @inheritdoc */
    static fromSchema(schema: any): any;
    /** @inheritdoc */
    parse(dom: any, options: any): import("prosemirror-model").Node;
    #private;
}
import { DOMParser as BaseDOMParser } from "prosemirror-model";
