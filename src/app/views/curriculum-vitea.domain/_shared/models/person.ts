import { EntityBase, IEntityBaseInfo } from '../common/entitybase';
import { LvfGender } from '../enums/lvf-gender';

export interface IPersonInfo extends IEntityBaseInfo {
  FirstName: string;
  LastName: string;
  Profile?: string;
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
  Profile?: string;
  Email: string;
  LvfGender: LvfGender;
  Nationality: string;
  PhoneNumber: string;
  Picture?: string;

  // Client side properties
  PicturePath?: string;
  Initials: string;
  InitialBackGround?: string;

  /**
   * Create an instance of Person
   */
  constructor(info: IPersonInfo) {
    super(info);

    this.FirstName = info.FirstName ?? 'Amine';
    this.LastName = info.LastName ?? 'STAMBOULI';
    this.Profile = info.Profile;
    this.Email = info.Email ?? 'aminestambouli90@yahoo.fr';
    this.LvfGender = info.LvfGender ?? LvfGender.MAL;
    this.Nationality = info.Nationality ?? 'FRANÇAISE';
    this.PhoneNumber = info.PhoneNumber ?? '0699069390';
    this.Picture = info.Picture ?? 'photo_amine.png';

    if (this.Picture && this.Picture.trim() != '') {
      this.PicturePath = `assets/images/${this.Picture}`;
    }
    this.InitialBackGround = this.getRandomColor();
    this.Initials = this.getInitials();
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
  // public static createInstance<T extends EntityBase>(c: { new(info: IEntityBaseInfo): T; }, info: IEntityBaseInfo = null): T {
  //   info = info ? info : <IEntityBaseInfo>{};

  //   return new c(info);
  // }

 public static createInstance<T extends EntityBase>(c: { new (info: IEntityBaseInfo): T }, info?: IEntityBaseInfo): T {
   info = info ? info : <IEntityBaseInfo>{}
    return new c(info);
  }
}
