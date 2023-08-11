import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {  Injectable } from '@angular/core';
import { IMMEUBLE, ImmeubleService } from '../services/immeuble.service';


@Injectable()
export class ImmeubleResolver implements Resolve<IMMEUBLE[]>{
    constructor(private immeubleService: ImmeubleService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMMEUBLE[]>{
        return this.immeubleService.getAllImmeubles()
    }
}