import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {

  login(username: string, password: string): boolean {
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('user', username);
    return true;
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }
}
