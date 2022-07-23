import { BindTypes, IHTMLBindHandler } from './bind-model';
export declare class HTMLBindHandler {
    type: BindTypes;
    element: HTMLElement;
    result: unknown;
    previous: unknown;
    expression: string;
    HTML?: string;
    computed?: boolean;
    attribute: string | null;
    constructor(templateBind: IHTMLBindHandler);
    /**
     * Can return an array of elements or nothing, if it contains elements
     * then we need to re-bind them
     * @param context Context that will be given to the template
     */
    compute(context: any): HTMLElement[] | void;
    private RequiresAttr;
    /**
     * Hear me out:
     * All ':if | :foreach' binds are replaced by a comment marker and the actual HTML is stored in the HTMLBindHandler
     * these bind types could entirely remove elements from the DOM so we need to always have an anchor point to know
     * where this HTMLBindHandler should append or remove elements, because the nature of recursing the DOM the
     * contents of these binds won't be checked (because its replaced by a comment marker), which is expected. Only
     * when they are computed, and the content is actually rendered, we validate its content for more HTMLBindHandlers
     */
    private replaceForMarker;
}
