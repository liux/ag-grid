// Type definitions for ag-grid-community v20.1.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
export declare class ResizeObserverService {
    private gridOptionsWrapper;
    private frameworkFactory;
    observeResize(element: HTMLElement, callback: () => void): () => void;
}
