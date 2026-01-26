import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calories',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calories.component.html'
})
export class CaloriesComponent {

  calories: number = 0;

  caloriesList: number[] = JSON.parse(
    localStorage.getItem('caloriesList') || '[]'
  );

  addCalories() {
    if (this.calories > 0) {
      this.caloriesList.push(this.calories);
      localStorage.setItem(
        'caloriesList',
        JSON.stringify(this.caloriesList)
      );
      this.calories = 0;
    }
  }

  deleteCalories(i: number) {
    this.caloriesList.splice(i, 1);
    localStorage.setItem(
      'caloriesList',
      JSON.stringify(this.caloriesList)
    );
  }
}
