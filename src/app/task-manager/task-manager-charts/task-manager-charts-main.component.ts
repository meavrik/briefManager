import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'task-manager-charts-main',
  template: `
    
  `,
  styles: []
})
export class TaskManagerChartsMainComponent {

  data: any;

  constructor() {
      this.data = {
          labels: ['A','B','C'],
          datasets: [
              {
                  data: [300, 50, 100],
                  backgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ],
                  hoverBackgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ]
              }]    
          };
  }
}
