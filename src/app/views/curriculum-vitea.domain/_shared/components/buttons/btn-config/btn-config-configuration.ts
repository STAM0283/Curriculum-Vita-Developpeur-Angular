import { BtnConfig, IBtnConfigInfo } from "./btn-config";

export interface IBtnConfigurationInfo {
  Buttons: IBtnConfigInfo[];
}

export class BtnConfiguration {
  Buttons: BtnConfig[];

  /**
   * Create an instance of BtnConfiguration
   */
  constructor(info: IBtnConfigurationInfo) {
    this.Buttons = info.Buttons?.map(b => new BtnConfig(b)) ?? [];

  }
}
