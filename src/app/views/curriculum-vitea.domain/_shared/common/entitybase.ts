export interface IEntityBaseInfo {

    Id?: number;
    IsActive?: boolean;
}

export class EntityBase {

    Id: number;
    IsActive: boolean;
    /**
    * @class Entitybase
    * @classdesc Represents the base class shared by all entities.
    */
    constructor(info: IEntityBaseInfo) {

        this.Id = info.Id ?? 1,
        this.IsActive = info.IsActive ?? true;

    }
}
