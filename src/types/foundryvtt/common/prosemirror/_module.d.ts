export * as commands from "prosemirror-commands";
export * as transform from "prosemirror-transform";
export * as list from "prosemirror-schema-list";
export * as tables from "prosemirror-tables";
export * as input from "prosemirror-inputrules";
export * as state from "prosemirror-state";
import { AllSelection } from "prosemirror-state";
import { TextSelection } from "prosemirror-state";
import DOMParser from "./dom-parser.mjs";
import { DOMSerializer } from "prosemirror-model";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { Schema } from "prosemirror-model";
import { Step } from "prosemirror-transform";
import { Plugin } from "prosemirror-state";
import { PluginKey } from "prosemirror-state";
import ProseMirrorPlugin from "./plugin.mjs";
import ProseMirrorContentLinkPlugin from "./content-link-plugin.mjs";
import ProseMirrorHighlightMatchesPlugin from "./highlight-matches-plugin.mjs";
import ProseMirrorDirtyPlugin from "./dirty-plugin.mjs";
import ProseMirrorImagePlugin from "./image-plugin.mjs";
import ProseMirrorClickHandler from "./click-handler.mjs";
import ProseMirrorInputRules from "./input-rules.mjs";
import ProseMirrorKeyMaps from "./keymaps.mjs";
import ProseMirrorMenu from "./menu.mjs";
import * as collab from "prosemirror-collab";
export namespace defaultPlugins {
    let inputRules: Plugin<{
        transform: import("prosemirror-state").Transaction;
        from: number;
        to: number;
        text: string;
    }>;
    let keyMaps: Plugin<any>;
    let menu: Plugin<any>;
    let isDirty: Plugin<boolean>;
    let clickHandler: Plugin<any>;
    let pasteTransformer: Plugin<any>;
    let baseKeyMap: Plugin<any>;
    let dropCursor: Plugin<any>;
    let gapCursor: Plugin<any>;
    let history: Plugin<any>;
    let columnResizing: Plugin<any>;
    let tables: Plugin<any>;
}
import { schema as defaultSchema } from "./schema.mjs";
export namespace dom {
    export let parser: any;
    export let serializer: DOMSerializer;
    export { parseHTMLString as parseString };
    export { serializeHTMLString as serializeString };
}
import { keymap } from "prosemirror-keymap";
import { parseHTMLString } from "./util.mjs";
import { serializeHTMLString } from "./util.mjs";
export { AllSelection, TextSelection, DOMParser, DOMSerializer, EditorState, EditorView, Schema, Step, Plugin, PluginKey, ProseMirrorPlugin, ProseMirrorContentLinkPlugin, ProseMirrorHighlightMatchesPlugin, ProseMirrorDirtyPlugin, ProseMirrorImagePlugin, ProseMirrorClickHandler, ProseMirrorInputRules, ProseMirrorKeyMaps, ProseMirrorMenu, collab, defaultSchema, keymap };
