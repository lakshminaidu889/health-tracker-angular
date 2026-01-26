import { Injectable } from '@angular/core';

export interface User {
  name: string;
  running: number;
  swimming: number;
  cycling: number;
  yoga: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

  private save() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User) {
    this.users.push(user);
    this.save();
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
    this.save();
  }

  updateUser(index: number, user: User) {
    this.users[index] = user;
    this.save();
  }
}
