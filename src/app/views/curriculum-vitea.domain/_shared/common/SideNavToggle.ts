export interface ISideNavToggleInfo {
    ScreenWidth: number;
    IsCollapsed: boolean;
}

export class SideNavToggle {
    ScreenWidth: number;
    IsCollapsed: boolean;

    /**
     * Create an instance of SideNavToggle
     */
    constructor(info: ISideNavToggleInfo) {
        this.ScreenWidth = info.ScreenWidth;
        this.IsCollapsed = info.IsCollapsed;

    }
}