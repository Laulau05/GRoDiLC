
export class AddAppartement {
    static readonly type = '[Appartement] Add';
    constructor(public payload: any) {}
}

export class GetAppartements {
    static readonly type = '[Appartement] Fetch';
}

export class UpdateAppartement {
    static readonly type = '[Appartement] Update';
    constructor(public payload: any, public id: string | any) {}
}

export class DeleteAppartement{
    static readonly type = '[Appartement] Delete';
    constructor(public id: string | any) {}
}