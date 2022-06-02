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

  /**
   * Create Instance of Email
   */
  constructor(info: IEmailInfo) {
    this.Name = info.Name;
    this.City = info.City;
    this.Email = info.Email;
    this.Message = info.Message;
  }
}
