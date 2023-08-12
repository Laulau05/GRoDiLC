

export class GetUsers {
    static readonly type = '[User] Fetch';
}

export class AddUser {
    static readonly type = '[User] Add';
    constructor(public payload: any) {}
}

export class UpdateUser {
    static readonly type = '[User] Update';
    constructor(public payload: any, public id: string | any) {}
}

export class DeleteUser{
    static readonly type = '[User] Delete';
    constructor(public id: string | any) {}
}