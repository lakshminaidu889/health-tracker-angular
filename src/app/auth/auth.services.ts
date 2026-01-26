import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private KEY = 'loggedUser';

  login(username: string, password: string): boolean {
    if (username && password) {
      localStorage.setItem(this.KEY, username);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem(this.KEY);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.KEY);
  }

  getUser(): string {
    return localStorage.getItem(this.KEY) || '';
  }
}
