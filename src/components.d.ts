/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DatetimeFormatter {
        "displaytype": string;
        "format": string;
        "timestamp": string;
    }
    interface VideoEmbed {
        "isdark": boolean;
        "subtitle": string;
        "title": string;
        "url": string;
    }
}
declare global {
    interface HTMLDatetimeFormatterElement extends Components.DatetimeFormatter, HTMLStencilElement {
    }
    var HTMLDatetimeFormatterElement: {
        prototype: HTMLDatetimeFormatterElement;
        new (): HTMLDatetimeFormatterElement;
    };
    interface HTMLVideoEmbedElement extends Components.VideoEmbed, HTMLStencilElement {
    }
    var HTMLVideoEmbedElement: {
        prototype: HTMLVideoEmbedElement;
        new (): HTMLVideoEmbedElement;
    };
    interface HTMLElementTagNameMap {
        "datetime-formatter": HTMLDatetimeFormatterElement;
        "video-embed": HTMLVideoEmbedElement;
    }
}
declare namespace LocalJSX {
    interface DatetimeFormatter {
        "displaytype"?: string;
        "format"?: string;
        "timestamp"?: string;
    }
    interface VideoEmbed {
        "isdark"?: boolean;
        "subtitle"?: string;
        "title"?: string;
        "url"?: string;
    }
    interface IntrinsicElements {
        "datetime-formatter": DatetimeFormatter;
        "video-embed": VideoEmbed;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "datetime-formatter": LocalJSX.DatetimeFormatter & JSXBase.HTMLAttributes<HTMLDatetimeFormatterElement>;
            "video-embed": LocalJSX.VideoEmbed & JSXBase.HTMLAttributes<HTMLVideoEmbedElement>;
        }
    }
}