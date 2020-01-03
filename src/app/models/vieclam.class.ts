export class ViecLam{
    public id : number;
    public name : String;
    public status : boolean;
    public cateId : number;

    constructor (id : number,name : String , status : boolean, cateId : number)
    {
        this.id = id;
        this.name = name;
        this.status = status;
        this.cateId = cateId;
    }
}

