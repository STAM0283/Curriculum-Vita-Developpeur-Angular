export interface IBtnConfigInfo {
  Style: String;
  Label: String;
  Class: string;
  Order: Number;
  HoverTitle: String;
  Icon: String;
  Handler: (data: any) => void;
}

export class BtnConfig {
  Style: String;
  Label: String;
  Class: string;
  Order: Number;
  HoverTitle: String;
  Icon: String;
  Handler: (data: any) => void;

  /**
   * Create an instance BtnInfo
   */
  constructor(info: IBtnConfigInfo) {
      this.Style = info.Style,
      this.Label = info.Label,
      this.Class = info.Class,
      this.Order = info.Order,
      this.HoverTitle = info.HoverTitle,
      this.Icon = info.Icon,
      this.Handler = info.Handler
  }
}
