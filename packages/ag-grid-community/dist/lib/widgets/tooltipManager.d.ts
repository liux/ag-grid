// Type definitions for ag-grid-community v20.1.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { CellComp } from "../rendering/cellComp";
import { HeaderWrapperComp } from "../headerRendering/header/headerWrapperComp";
import { HeaderGroupWrapperComp } from "../headerRendering/headerGroup/headerGroupWrapperComp";
declare type TooltipTarget = CellComp | HeaderWrapperComp | HeaderGroupWrapperComp;
export declare class TooltipManager {
    private popupService;
    private componentRecipes;
    private columnApi;
    private gridApi;
    private readonly DEFAULT_HIDE_TOOLTIP_TIMEOUT;
    private readonly MOUSEOUT_HIDE_TOOLTIP_TIMEOUT;
    private readonly MOUSEOVER_SHOW_TOOLTIP_TIMEOUT;
    private readonly HIDE_SHOW_ONLY;
    private showTimeoutId;
    private hideTimeoutId;
    private activeComponent;
    private lastHoveredComponent;
    private lastMouseEvent;
    private registeredComponents;
    registerTooltip(targetCmp: TooltipTarget): void;
    private unregisterTooltip;
    private processMouseOver;
    private processMouseOut;
    private processMouseMove;
    private showTooltip;
    private createTooltipComponent;
    private hideTooltip;
    private clearRegisteredComponent;
    private clearTimers;
}
export {};
