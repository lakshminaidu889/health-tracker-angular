import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sleep',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sleep.component.html'
})
export class SleepComponent {

  hours: number = 0;

  sleepList: number[] = JSON.parse(
    localStorage.getItem('sleepList') || '[]'
  );

  addSleep() {
    if (this.hours > 0) {
      this.sleepList.push(this.hours);
      localStorage.setItem(
        'sleepList',
        JSON.stringify(this.sleepList)
      );
      this.hours = 0;
    }
  }

  deleteSleep(i: number) {
    this.sleepList.splice(i, 1);
    localStorage.setItem(
      'sleepList',
      JSON.stringify(this.sleepList)
    );
  }
}
