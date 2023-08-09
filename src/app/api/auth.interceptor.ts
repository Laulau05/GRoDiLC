import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Observable, catchError, throwError } from "rxjs";
import { Router } from "@angular/router";


@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(
        private authService: AuthService,
        private router: Router 
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authRequest = req;
        const token = this.authService.getToken();
        if(token) {
            authRequest = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
            this.router.navigate(['/admin']);
        }
        
        //response
        return next.handle(authRequest).pipe(
            catchError((error) => {
                if(error instanceof HttpErrorResponse && error.status === 401) {
                    this.authService.logout();

                    //redirect login
                    this.router.navigate(['/login'])
                }
                return throwError(error);
            })
        );
    }
}