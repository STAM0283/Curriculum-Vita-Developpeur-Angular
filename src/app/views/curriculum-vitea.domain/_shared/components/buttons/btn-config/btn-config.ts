export interface IBtnConfigInfo {
  Style: String;
  Label: String;
  Order: Number;
  HoverTitle: String;
  Icon: String;
  Handler: () => void;
}

export class BtnConfig {
  Style: String;
  Label: String;
  Order: Number;
  HoverTitle: String;
  Icon: String;
  Handler: () => void;

  /**
   * Create an instance BtnInfo
   */
  constructor(info: IBtnConfigInfo) {
      this.Style = info.Style,
      this.Label = info.Label,
      this.Order = info.Order,
      this.HoverTitle = info.HoverTitle,
      this.Icon = info.Icon,
      this.Handler = info.Handler
  }
}
