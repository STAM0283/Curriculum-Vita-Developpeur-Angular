import { IMultyBtnInfo, MultyBtn } from "./mutli-btn";

export interface IMultyBtnConfigInfo {

  buttons: IMultyBtnInfo[];
}

export class MultyBtnConfig {

  buttons: MultyBtn[];

  /**
   * Create an instance of MultyBtnConfig
   */
  constructor(info: IMultyBtnConfigInfo) {

    this.buttons = info.buttons?.map(b => new MultyBtn(b)) ?? [];
  }

}
