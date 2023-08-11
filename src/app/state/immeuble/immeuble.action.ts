

export class GetImmeubles {
    static readonly type = '[Immeuble] Fetch';
}

export class AddImmeuble {
    static readonly type = '[Immeuble] Add';
    constructor(public payload: any) {}
}

export class UpdateImmeuble {
    static readonly type = '[Immeuble] Update';
    constructor(public payload: any, public id: string | any) {}
}

export class DeleteImmeuble{
    static readonly type = '[Immeuble] Delete';
    constructor(public id: string | any) {}
}