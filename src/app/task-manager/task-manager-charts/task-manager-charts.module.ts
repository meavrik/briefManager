import {SharedModule, ChartModule} from 'primeng/primeng';

import { TaskManagerChartsMainComponent } from './task-manager-charts-main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ChartModule,
    SharedModule,
  ],
  declarations: [TaskManagerChartsMainComponent],
  exports: [TaskManagerChartsMainComponent]
})
export class TaskManagerChartsModule { }
