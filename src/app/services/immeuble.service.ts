import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { env } from 'src/env/env';

export interface IMMEUBLE {
    id: string;
    name: string;
    address: string;
    description: string;
}

@Injectable({
    providedIn: 'root'
})
export class ImmeubleService {

    //create a property to store the url of the api
    private baseUrl = env.localUrl;

    constructor(private http: HttpClient) { }

    // Get all immeubles use observable
    getAllImmeubles(): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/immeubles`)
    }

    // Get immeuble by id use observable
    getImmeubleById(id: string): Observable<IMMEUBLE> {
        return this.http.get<any>(`${this.baseUrl}/immeubles/${id}`)
    }

    // Create new immeuble use observable
    createImmeuble(immeuble: any): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}/immeubles`, immeuble)
    }

    // Update immeuble use observable
    updateImmeuble(id: string, immeuble: any): Observable<IMMEUBLE> {
        return this.http.put<any>(`${this.baseUrl}/immeubles/update/${id}`, immeuble)
    }


    // Delete immeuble use observable
    deleteImmeuble(id: string): Observable<IMMEUBLE> {
        return this.http.delete<any>(`${this.baseUrl}/immeubles/${id}`)
    }

    // Get all immeubles by user id use observable
    getAllImmeublesByUserId(id: string): Observable<IMMEUBLE> {
        return this.http.get<any>(`${this.baseUrl}/immeubles/user/${id}`)
    }

}