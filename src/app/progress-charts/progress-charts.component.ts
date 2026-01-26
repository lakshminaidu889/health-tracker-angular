import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-progress-charts',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './progress-charts.component.html'
})
export class ProgressChartsComponent implements OnChanges {
  @Input() users: any[] = [];

  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: []
  };

  ngOnChanges() {
    this.barChartData = {
  labels: [] as string[],
  datasets: [
    {
      label: 'Workout Minutes',
      data: [] as number[],
      backgroundColor: '#4CAF50'
    }
  ]
};

  }
}
