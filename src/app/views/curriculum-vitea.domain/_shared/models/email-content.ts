import { IMultyBtnConfigInfo, MultyBtnConfig } from "../components/buttons/multi-btn/multi-btn-config";
import { IMultyBtnInfo, MultyBtn } from "../components/buttons/multi-btn/mutli-btn";

export interface IEmailInfo {

  Name?: string;
  City?: string;
  Email?: string;
  Message?: string;
}

export class Email {

  Name?: string;
  City?: string;
  Email?: string;
  Message?: string;

  // Client properties
  BtnConfig?: MultyBtnConfig;

  /**
   * Create Instance of Email
   */
  constructor(info: IEmailInfo) {

    this.Name = info.Name;
    this.City = info.City;
    this.Email = info.Email;
    this.Message = info.Message;
    this.BtnConfig = this.buildBtnsConfig();
  }

  private buildBtnsConfig(): MultyBtnConfig {

    return new MultyBtnConfig(<IMultyBtnConfigInfo>{
      buttons: [
        new MultyBtn(<IMultyBtnInfo>{
          Style: "background-color: #19BCFE; color: #fff",
          Class: "btn btn-primary",
          Label: "app.shared.submit",
          HoverTitle: "app.shared.submit",
          Icon: "",
          Order: 2,

        }),

        new MultyBtn(<IMultyBtnInfo>{
          Style: "background-color: #FE193F; color: #fff",
          Class: "btn btn-danger",
          Label: "app.shared.cancel",
          HoverTitle: "app.shared.cancel",
          Icon: "",
          Order: 1,
          Handler: () => this.resetForm(),
        })
      ]
    })

  }

  resetForm() {
    this.Name = "";
    this.City = "";
    this.Email = "";
    this.Message = "";
  }
}
