import { EntityBase, IEntityBaseInfo } from "../common/entitybase";
import { LvfGender } from "../enums/lvf-gender";

export interface IPersonInfo extends IEntityBaseInfo {
    FirstName: string;
    LastName: string;
    Profile: string;
    Email: string;
    LvfGender: LvfGender;
    Nationality: string;
    PhoneNumber: string;
}

export class Person extends EntityBase {

    FirstName: string;
    LastName: string;
    Profile: string;
    Email: string;
    LvfGender: LvfGender;
    Nationality: string;
    PhoneNumber: string;

    /**
     * Create an instance of Person
     */
    constructor(info: IPersonInfo) {
        super(info);

        this.FirstName = info.FirstName;
        this.LastName = info.LastName;
        this.Profile = info.Profile;
        this.Email = info.Email;
        this.LvfGender = info.LvfGender;
        this.Nationality = info.Nationality;
        this.PhoneNumber = info.PhoneNumber

    }
}