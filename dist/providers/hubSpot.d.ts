import { State } from '../types';
export declare const domain = "js.hs-scripts.com";
declare global {
    interface Window {
        HubSpotConversations: any;
        hsConversationsSettings: any;
        hsConversationsOnReady: any;
    }
}
declare const _default: {
    load: ({ providerKey, setState, beforeInit, onReady, }: {
        providerKey: string;
        setState: (state: State) => void;
        beforeInit?: (() => void) | undefined;
        onReady?: (() => void) | undefined;
    }) => boolean;
    open: () => unknown;
    close: () => unknown;
    domain: string;
};
export default _default;
