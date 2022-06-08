export interface IMultyBtnInfo {
  Style?: string;
  Class?: string;
  Label: string;
  HoverTitle: string;
  Icon?: string;
  Order?: number;
  Handler: () => void;
}

export class MultyBtn {
  Style?: string;
  Class?: string;
  Label: string;
  HoverTitle!: string;
  Icon?: string;
  Order?: number;
  Handler!: () => void;

  /**
   * Create an instance of MultiBtn
   */
  constructor(info: IMultyBtnInfo) {
    this.Style = info.Style;
    this.Class = info.Class;
    this.Label = info.Label;
    this.HoverTitle = info.HoverTitle;
    this.Icon = info.Icon;
    this.Order = info.Order;
    this.Handler = info.Handler;
  }
}
