import { EntityBase, IEntityBaseInfo } from '../common/entitybase';
import { BtnConfig, IBtnConfigInfo } from '../components/buttons/btn-config/btn-config';
import { BtnConfiguration, IBtnConfigurationInfo } from '../components/buttons/btn-config/btn-config-configuration';
import { LvfGender } from '../enums/lvf-gender';

export interface IPersonInfo extends IEntityBaseInfo {
  FirstName: string;
  LastName: string;
  Job: string;
  Profile: string;
  Email: string;
  LvfGender: LvfGender;
  Nationality: string;
  PhoneNumber: string;
  Picture?: string;
  PicturePath?: string;
}

export class Person extends EntityBase {
  FirstName: string;
  LastName: string;
  Job: string;
  Profile: string;
  Email: string;
  LvfGender: LvfGender;
  Nationality: string;
  PhoneNumber: string;
  Picture?: string;

  // Client side properties
  PicturePath?: string;
  Initials: string;
  InitialBackGround?: string;

  BtnConfig?: BtnConfiguration;

  /**
   * Create an instance of Person
   */
  constructor(info: IPersonInfo) {
    super(info);

    this.FirstName = info.FirstName;
    this.LastName = info.LastName;
    this.Job = info.Job;
    this.Profile = info.Profile;
    this.Email = info.Email;
    this.LvfGender = info.LvfGender;
    this.Nationality = info.Nationality;
    this.PhoneNumber = info.PhoneNumber;
    this.Picture = info.Picture ?? 'photo_amine.png';

    if (this.Picture && this.Picture.trim() != '') {
      this.PicturePath = `assets/images/${this.Picture}`;
    }
    this.InitialBackGround = this.getRandomColor();
    this.Initials = this.getInitials();
    if(this.Id){
      this.BtnConfig = this.buildBtnConfig();
    }
  }

  buildBtnConfig() {
    return new BtnConfiguration(<IBtnConfigurationInfo>{
      Buttons : [
        new BtnConfig(<IBtnConfigInfo>{
            Label: "Actif",
            Style: "",
            Class: "btn btn-dark",
            Icon: "",
            HoverTitle: "",
            Order: 2,
            Handler: () => {}

        }),

      ]
    })

  }

  getInitials() : string {
    if(this.FirstName && this.LastName){
      let first = this.FirstName ? this.FirstName.trim().charAt(0) : '';
      let last = this.LastName ? this.LastName.trim().charAt(0) : '';
      let initials = first + last;

      return initials.toLocaleUpperCase();
    }
    return '';
  }

  getRandomColor(): string {
    if (this.FirstName && this.LastName) {
      let colors = [
        '#2E8364',
        '#9C8ADE',
        '#8B56B2',
        '#DB5C77',
        '#D3C0F9',
        '#F18636',
        '#D93A37',
        '#bfcfff',
        '#1F89E8',
        '#F5888D',
        '#B7EFCD',
        '#407887',
        '#5A8770',
        '#FFABAB',
        '#FFBEBC',
        '#FFB5E8',
        '#415BA5',
        '#6EBSFF',
        '#FF8E01',
        '#1ED7EF',
        '#F06664',
        '#42870D',
        '#ffaaa5',
        '#a8e6cf',
      ];
      let colorIndex = Math.floor(
        (this.FirstName.trim().charCodeAt(0) +
          this.LastName.trim().charCodeAt(0) -
          130) %
          colors.length
      );
      let color = colors[colorIndex];
      console.log(color);
      return color;
    } else {
      return '';
    }
  }

 public static createInstance<T extends EntityBase>(c: { new (info: IEntityBaseInfo): T }, info?: IEntityBaseInfo): T {
   info = info ? info : <IEntityBaseInfo>{}
    return new c(info);
  }
}
