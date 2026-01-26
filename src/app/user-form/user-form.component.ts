import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';


@Component({
  standalone: true,
  selector: 'app-user-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-form.component.html'
})
export class UserFormComponent {
  @Input() editUser?: User;

  user: User = {
    id: 0,
    name: '',
    running: 0,
    swimming: 0,
    cycling: 0,
    yoga: 0
  };

  constructor(private userService: UserService) {}

  ngOnChanges() {
    if (this.editUser) {
      this.user = { ...this.editUser };
    }
  }

  save() {
    if (!this.user.name.trim()) {
      alert('Name is required');
      return;
    }

    if (this.user.id) {
      this.userService.updateUser(this.user);
    } else {
      this.userService.addUser(this.user);
    }

    this.reset();
  }

  reset() {
    this.user = {
      id: 0,
      name: '',
      running: 0,
      swimming: 0,
      cycling: 0,
      yoga: 0
    };
  }
}
