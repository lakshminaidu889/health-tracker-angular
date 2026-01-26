import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {

  user: any;

  constructor(private route: ActivatedRoute) {}
 ngOnInit(): void {
  const username = this.route.snapshot.paramMap.get('username');
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  this.user = users.find((u: any) => u.name === username);
}
}
