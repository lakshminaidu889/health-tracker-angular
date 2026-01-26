import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.component.html'
})
export class UsersComponent {
  users: any[] = JSON.parse(localStorage.getItem('users') || '[]');
  addUser() {
    console.log('User added');
  }
  user = {
    name: '',
    running: 0,
    swimming: 0,
    cycling: 0,
    yoga: 0
  };

  editingIndex: number | null = null;

  saveUser() {
    if (this.editingIndex === null) {
      this.users.push({ ...this.user });
    } else {
      this.users[this.editingIndex] = { ...this.user };
      this.editingIndex = null;
    }
    
    localStorage.setItem('users', JSON.stringify(this.users));
    this.reset();
  }

  editUser(i: number) {
    this.user = { ...this.users[i] };
    this.editingIndex = i;
  }

  deleteUser(i: number) {
    this.users.splice(i, 1);
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  reset() {
    this.user = {
      name: '',
      running: 0,
      swimming: 0,
      cycling: 0,
      yoga: 0
    };
  }
}
