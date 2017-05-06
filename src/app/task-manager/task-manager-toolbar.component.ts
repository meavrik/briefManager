import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'task-manager-toolbar',
  template: `
    <md-toolbar color="primary">
        <img src="./assets/starwars/avatar_2.jpeg" alt="Smiley face">
        <button class="app-icon-button">
             <i class="material-icons app-toolbar-menu">menu</i>
        </button> מערכת ניהול בריפים
        
        <span class="app-toolbar-filler"></span>
        
        <button md-button (click)="isDarkTheme = !isDarkTheme" class="brand-logo">DALIA INBAR</button>
    </md-toolbar>
  `,
  styles: [`img {
      display: block;
      max-height:50px;
      width: auto;
      height: auto;
    }`]
})
export class TaskManagerToolbarComponent {
  
  @Input() isDarkTheme;
  constructor() { }
  
  
}
