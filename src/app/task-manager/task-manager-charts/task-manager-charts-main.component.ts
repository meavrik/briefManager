import {UIChart} from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'task-manager-charts-main',
  template: `
    <p-chart #chart type="pie"></p-chart>
  `,
  styles: []
})
export class TaskManagerChartsMainComponent {

  data: any;
    


update(chart: UIChart) {
    //this.data = //reload
    chart.refresh();
}
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
