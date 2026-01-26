import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Activity totals for bar graph
  totals = {
    running: 0,
    swimming: 0,
    cycling: 0,
    yoga: 0
  };

  ngOnInit() {
    this.calculateActivityTotals();
  }

  // 🔹 Calculate totals from USERS data
  calculateActivityTotals() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    this.totals = {
      running: users.reduce((sum: number, u: any) => sum + (u.running || 0), 0),
      swimming: users.reduce((sum: number, u: any) => sum + (u.swimming || 0), 0),
      cycling: users.reduce((sum: number, u: any) => sum + (u.cycling || 0), 0),
      yoga: users.reduce((sum: number, u: any) => sum + (u.yoga || 0), 0)
    };
  }

  // 🔹 Normalize bar height (prevents broken UI)
  barHeight(value: number): string {
    const max = Math.max(
      this.totals.running,
      this.totals.swimming,
      this.totals.cycling,
      this.totals.yoga,
      1
    );
    return (value / max) * 100 + '%';
  }

  // 🔹 Total calories from Calories page
  getTotalCalories(): number {
    const caloriesList = JSON.parse(
      localStorage.getItem('caloriesList') || '[]'
    );
    return caloriesList.reduce((sum: number, c: number) => sum + c, 0);
  }

  // 🔹 Average sleep from Sleep page
  getAverageSleep(): number {
    const sleepList = JSON.parse(
      localStorage.getItem('sleepList') || '[]'
    );
    if (sleepList.length === 0) return 0;

    const total = sleepList.reduce(
      (sum: number, h: number) => sum + h,
      0
    );
    return total / sleepList.length;
  }
}
