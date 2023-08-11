import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { env } from 'src/env/env';

export class USERS {
  id!: number;
  firstName!: string;
  lastName!: string;
  name!: string;
  email!: string;
  phoneNumber!: string;
  matricule!: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

    private currentUserSubject: BehaviorSubject<USERS | null> = new BehaviorSubject<USERS | null>(null);
    currentUser$: Observable<USERS | null> = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchCurrentUser();
  }

  // Get all users use observable
  getAllUsers(): Observable<USERS[]> {
    return this.http.get<USERS[]>(`${env.localUrl}/users`)
  }

  // Get user by id use observable
  getUserById(id: string): Observable<USERS[]> {
    return this.http.get<USERS[]>(`${env.localUrl}/users/${id}`)
  }

  // Create new user use observable
  createUser(user: any): Observable<any> {
    return this.http.post<any>(`${env.localUrl}/users`, user)
  }

  private fetchCurrentUser() {
    // Fetch the current user's data using an API call or any other method
    // Example:
    this.http.get<any>(`${env.localUrl}/users/login/current`).subscribe(
      (user: any) => {
        console.log('Fetched current user:', user);
        this.currentUserSubject.next(user);
      },
      (error) => {
        console.error('Error fetching current user:', error);
      }
    );
  }
  
}
