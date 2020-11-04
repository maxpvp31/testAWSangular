import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { environment } from '../environments/environment';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    constructor(private http: HttpClient, private router: Router) {
    }

    

    login(email: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/auth/login`, { email : email, password : password })
            .pipe(map(user => {
           
                localStorage.setItem('user', JSON.stringify(user));

                return user;
            }));
    }


    reset_password(email: string) {
        return this.http.post<any>(`${environment.apiUrl}/users/reset_password`, { email : email });
    }


    logout() {
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
      
    }

  
}