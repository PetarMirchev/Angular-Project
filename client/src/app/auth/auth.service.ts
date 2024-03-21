import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    // in final logic hear need to be check is token valid (true) or not (false) & clean the token is invalid!
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['home']); // or navigate to 'home' page
  }

  login({ email, password }: any): Observable<any> {
    
    // statick check of user (if logic)!! in real app need to be check whit back-end server!
    if (email === 'admin@abv.bg' && password === '12345') {
      this.setToken('accessToken');
      return of({ name: 'Pepi Mir', email: 'admin@abv.bg' });
    }

    return throwError(new Error('Failed to login'));
  }
}