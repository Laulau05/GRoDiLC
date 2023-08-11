import { Action, Select, Selector, State, StateContext, Store } from "@ngxs/store";
import { Immeuble } from "./immeuble.model";
import { Injectable } from "@angular/core";
import { ImmeubleService } from "src/app/services/immeuble.service";
import { AddImmeuble, DeleteImmeuble, GetImmeubles, UpdateImmeuble } from "./immeuble.action";
import { catchError, of, tap } from "rxjs";


export class immeubleStateModel {
    immeuble?: Immeuble[];
    error?: Error | null;
}

@State<immeubleStateModel>({
    name: 'immeuble',
    defaults: {
        immeuble: [],
        error: null
    }
})
@Injectable()
export class ImmeubleState {
    constructor(
        private immeubleService: ImmeubleService,
        private store: Store
    ){}

    @Selector()
    static selectStateData(state: immeubleStateModel) {
        return state.immeuble;
    }

    @Selector() 
    static selectStateError(state: immeubleStateModel){
        return state.error;
    }

    @Action(GetImmeubles)
    getAllImmeublesState(ctx: StateContext<immeubleStateModel>){
        const state = ctx.getState();
        return this.immeubleService.getAllImmeubles().pipe(tap((returnData: any) => {
            ctx.patchState({
                ...state,
                immeuble: returnData.data,
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

    @Action(AddImmeuble)
    AddImmeubleState(ctx: StateContext<immeubleStateModel>, { payload }: AddImmeuble){
        const state = ctx.getState();
        return this.immeubleService.createImmeuble(payload).pipe(tap((returnData: any) => {
                this.store.dispatch(new GetImmeubles());  
            }),
            catchError((error) => {
                return of(
                    ctx.setState({
                        ...state,
                        error: error?.error?.message
                    })
                )
            })
        )
    }

    @Action(UpdateImmeuble)
    UpdateImmeubleState(ctx: StateContext<immeubleStateModel>, { id, payload }: UpdateImmeuble){
        const state = ctx.getState();
        return this.immeubleService.updateImmeuble(id, payload).pipe(tap((returnData: any) => {
                this.store.dispatch(new GetImmeubles());  
            }),
            catchError((error) => {
                return of(
                    ctx.setState({
                        ...state,
                        error: error?.error?.message
                    })
                )
            })
        )
    }

    @Action(DeleteImmeuble)
    DeleteImmeubleState(ctx: StateContext<immeubleStateModel>, { id }: DeleteImmeuble){
        const state = ctx.getState();
        return this.immeubleService.deleteImmeuble(id).pipe(tap((returnData: any) => {
                this.store.dispatch(new GetImmeubles());  
            }),
            catchError((error) => {
                return of(
                    ctx.setState({
                        ...state,
                        error: error?.error?.message
                    })
                )
            })
        )
    }
}