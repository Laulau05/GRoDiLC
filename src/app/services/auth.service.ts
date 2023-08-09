import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from 'src/env/env';

interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: User): Observable<User> {
    return this.http.post<User>(`${env.localUrl}/auth/login`, user)
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  setToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }
}
