import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { User } from './user.model';
import { AddUser, DeleteUser, GetUsers, UpdateUser } from './user.action';
import { UsersService } from 'src/app/services/users.service';
import { catchError, of, tap } from 'rxjs';


export interface UserStateModel {
    users: User[];
    error: Error | null;
}

@State<UserStateModel>({
    name: 'user',
    defaults: {
        users: [],
        error: null
    }
})
@Injectable()
export class UserState {

    constructor(
        private userService: UsersService,
        private store: Store
    ){}

    @Selector()
    static selectStateData(state: UserStateModel) {
        return state.users;
    }

    @Selector() 
    static selectStateError(state: UserStateModel){
        return state.error;
    }

    @Action(GetUsers)
    getAllUsersState(ctx: StateContext<UserStateModel>){
        const state = ctx.getState();
        return this.userService.getAllUsers().pipe(tap((returnData: any) => {
            ctx.patchState({
                ...state,
                users: returnData.data,
            })
            }),
            catchError((error) => {
                return of(
                    ctx.setState({
                        ...state,
                        error: error?.error?.message,
                    })
                )
            })
        )
    }

    @Action(AddUser)
    AddUserState(ctx: StateContext<UserStateModel>, { payload }: AddUser){
        const state = ctx.getState();
        return this.userService.createUser(payload).pipe(tap((returnData: any) => {
            this.store.dispatch(new GetUsers());
            }),
            catchError((error) => {
                return of(
                    ctx.setState({
                        ...state,
                        error: error?.error?.message,
                    })
                )
            })
        )
    }

    @Action(UpdateUser)
    UpdateUserState(ctx: StateContext<UserStateModel>, { payload, id }: UpdateUser){
        const state = ctx.getState();
        return this.userService.updateUser(payload, id).pipe(tap((returnData: any) => {
            this.store.dispatch(new GetUsers());
            }),
            catchError((error) => {
                return of(
                    ctx.setState({
                        ...state,
                        error: error?.error?.message,
                    })
                )
            })
        )
    }

    @Action(DeleteUser)
    DeleteUserState(ctx: StateContext<UserStateModel>, { id }: DeleteUser){
        const state = ctx.getState();
        return this.userService.deleteUser(id).pipe(tap((returnData: any) => {
            this.store.dispatch(new GetUsers());
            }),
            catchError((error) => {
                return of(
                    ctx.setState({
                        ...state,
                        error: error?.error?.message,
                    })
                )
            })
        )
    }

}