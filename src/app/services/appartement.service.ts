import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/env/env';
import { Observable } from 'rxjs';

export interface APPARTEMENT {
    libelle: string;
    description: string;
    prix: number;
    numAppartement: number;
    immeuble: string;
}

@Injectable({
    providedIn: 'root'
})
export class AppartementService {

    private baseUrl = env.localUrl;

    constructor(private http: HttpClient) { }


    // Get all appartements use observable
    getAllAppartements(): Observable<APPARTEMENT[]> {
        return this.http.get<APPARTEMENT[]>(`${this.baseUrl}/appartements`)
    }

    // Get appartement by id use observable
    getAppartementById(id: string): Observable<APPARTEMENT> {
        return this.http.get<APPARTEMENT>(`${this.baseUrl}/appartements/${id}`)
    }

    // Create new appartement use observable
    createAppartement(appartement: any): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}/appartements/create`, appartement)
    }

    // Update appartement use observable
    updateAppartement(id: string, appartement: any): Observable<APPARTEMENT> {
        return this.http.put<APPARTEMENT>(`${this.baseUrl}/appartements/update/${id}`, appartement)
    }

    deleteAppartement(id: string): Observable<APPARTEMENT> {
        return this.http.delete<APPARTEMENT>(`${this.baseUrl}/appartements/${id}`)
    }

}