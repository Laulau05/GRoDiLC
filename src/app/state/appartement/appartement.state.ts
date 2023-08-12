import { Appartement } from "./appartement.model";
import { Injectable } from "@angular/core";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { AppartementService } from "src/app/services/appartement.service";
import { AddAppartement, DeleteAppartement, GetAppartements, UpdateAppartement } from "./appartement.action";
import { catchError, of, tap } from "rxjs";


export class AppartementStateModel {
    appartements?: Appartement[];
    error?: Error | null;
}

@State<AppartementStateModel>({
    name: 'appartement',
    defaults: {
        appartements: [],
        error: null
    }
})
@Injectable()
export class AppartementState {
    constructor(
        private appartementService: AppartementService,
        private store: Store
    ){}

    @Selector()
    static selectStateData(state: AppartementStateModel) {
        return state.appartements;
    }

    @Selector() 
    static selectStateError(state: AppartementStateModel){
        return state.error;
    }

    @Action(GetAppartements)
    getAllAppartementsState(ctx: StateContext<AppartementStateModel>){
        const state = ctx.getState();
        return this.appartementService.getAllAppartements().pipe(tap((returnData: any) => {
            ctx.patchState({
                ...state,
                appartements: returnData.data,
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

    @Action(AddAppartement)
    AddAppartementState(ctx: StateContext<AppartementStateModel>, { payload }: AddAppartement){
        const state = ctx.getState();
        return this.appartementService.createAppartement(payload).pipe(tap((returnData: any) => {
            this.store.dispatch(new GetAppartements()); 
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

    @Action(UpdateAppartement)
    UpdateAppartementState(ctx: StateContext<AppartementStateModel>, { payload, id }: UpdateAppartement){
        const state = ctx.getState();
        return this.appartementService.updateAppartement(id, payload).pipe(tap((returnData: any) => {
            this.store.dispatch(new GetAppartements()); 
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

    @Action(DeleteAppartement)
    DeleteAppartementState(ctx: StateContext<AppartementStateModel>, { id }: DeleteAppartement){
        const state = ctx.getState();
        return this.appartementService.deleteAppartement(id).pipe(tap((returnData: any) => {
            this.store.dispatch(new GetAppartements()); 
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