import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <task-manager-main></task-manager-main>
  <router-outlet></router-outlet>`
})
export class AppComponent {
  
}