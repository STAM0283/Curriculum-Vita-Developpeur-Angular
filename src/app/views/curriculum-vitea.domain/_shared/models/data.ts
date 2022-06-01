import { LvfGender } from "../enums/lvf-gender";
import { IPersonInfo } from "./person";

export  class Data{
  static PERSONS: IPersonInfo[] = [
    {
      Id: 1,
      IsActive: true,
      FirstName: "AMINE",
      LastName: "STAMBOULI",
      Nationality: "FRANÇAISE",
      PhoneNumber: "0699069390",
      Email: "aminestambouli90@yahoo.fr",
      LvfGender: LvfGender.MAL,
      PicturePath: "assets/images/photo_amine.png",
    }
  ]
}
