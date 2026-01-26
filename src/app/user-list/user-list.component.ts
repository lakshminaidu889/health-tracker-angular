import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService, User } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.component.html'
})
export class UserListComponent {

  users: User[] = [];
  editingIndex: number | null = null;

  user: User = {
    name: '',
    running: 0,
    swimming: 0,
    cycling: 0,
    yoga: 0
  };

  constructor(private userService: UserService) {
    this.userService.users$.subscribe(data => {
      this.users = data;
    });
  }

  saveUser() {
    if (!this.user.name.trim()) return;

    if (this.editingIndex !== null) {
      this.userService.updateUser(this.editingIndex, this.user);
      this.editingIndex = null;
    } else {
      this.userService.addUser(this.user);
    }

    this.resetForm();
  }

  editUser(index: number) {
    this.editingIndex = index;
    this.user = { ...this.users[index] };
  }

  deleteUser(index: number) {
    this.userService.deleteUser(index);
  }

  resetForm() {
    this.user = {
      name: '',
      running: 0,
      swimming: 0,
      cycling: 0,
      yoga: 0
    };
  }
}
