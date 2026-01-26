import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-goals',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './goals.component.html'
})
export class GoalsComponent {

  goalText: string = '';

  goals: string[] = JSON.parse(
    localStorage.getItem('goals') || '[]'
  );

  addGoal() {
    if (this.goalText.trim()) {
      this.goals.push(this.goalText);
      localStorage.setItem(
        'goals',
        JSON.stringify(this.goals)
      );
      this.goalText = '';
    }
  }

  deleteGoal(i: number) {
    this.goals.splice(i, 1);
    localStorage.setItem(
      'goals',
      JSON.stringify(this.goals)
    );
  }
}
