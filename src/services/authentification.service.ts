// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { map } from 'rxjs/operators';


// import { environment } from '../environments/environment';
// import { User } from '../interfaces/user.interface';
// import { Router } from '@angular/router';
// import { first } from 'rxjs/operators';
// @Injectable({ providedIn: 'root' })
// export class AuthenticationService {
//     private currentUserSubject: BehaviorSubject<User>;
//     public currentUser: Observable<User>;

//     constructor(private http: HttpClient, private router: Router) {
//         this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
//         this.currentUser = this.currentUserSubject.asObservable();
//     }

//     public get currentUserValue(): User {
//         if(this.currentUserSubject == undefined) {
//             return null
//         } else {
//             return this.currentUserSubject.value;
//         }
        
//     }

//     login(email: string, password: string) {
//         return this.http.post<any>(`${environment.apiUrl}/auth/login`, { email : email, password : password })
//             .pipe(map(user => {
           
//                 localStorage.setItem('user', JSON.stringify(user));
//                 this.currentUserSubject.next(user);

//                 return user;
//             }));
//     }


//     reset_password(email: string) {
//         return this.http.post<any>(`${environment.apiUrl}/users/reset_password`, { email : email });
//     }


//     logout() {
//         localStorage.removeItem('user');
//         this.currentUserSubject.next(null);
//         this.router.navigate(['/login']);
      
//     }

//     getMe() {
//         return this.http.get<User>(`${environment.apiUrl}/auth/check`)
//         // if(user.auth == false)
//     }
// }