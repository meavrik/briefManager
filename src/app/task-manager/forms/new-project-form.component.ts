import { SelectItem } from 'primeng/primeng';
import { Client } from './../task-manager-clients/Client';
import { Store } from './../store.service';
import { Project } from './../task-manager-projects/project.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

/*<p-spinner formControlName="projectNumber" step="1000" [(ngModel)]="projectNumber" placeholder="מספר קטלוגי" [min]='1000'></p-spinner>*/
@Component({
  selector: 'new-project-form',
  template: `
    <form [formGroup]="dataForm" (ngSubmit)="onSubmit(dataForm.value)" style="height:150px">
        <input formControlName="title" type="text" pInputText [(ngModel)]="title" placeholder="שם"/>
        <span>מספר קטלוגי : {{projectNumber}} </span>

         <p-dropdown class="input" 
            formControlName="client"
            [options]="clients" 
            [(ngModel)]="selectedClient" 
            [style]="{'width':'160px','direction':'rtl'}" 
            [required]="true"
            scrollHeight="100px"
         >
        </p-dropdown>
        <button pButton type="button" [disabled]="!dataForm.valid"  (click)="onClick()" label="שמור" [style]="{'text-align':'left'}"></button>
    </form>
  `,
  styles: []
})
export class NewProjectFormComponent  {

  dataForm: FormGroup;
  title: string;
  clients: SelectItem[] = [];
  projectNumber: number = 1000;
  selectedClient;
  submitted:boolean;

  @Output() save = new EventEmitter<any>();

  constructor(private store: Store, private formBuilder: FormBuilder) {
    this.store.clients.subscribe(clients => this.clients = clients.map(item => { return { label: item.name, value: item.name } }));

    this.store.projects.subscribe(projects => {
      if (projects && projects.length > 0) {
        if (projects[projects.length - 1].projectNumber) {
          this.projectNumber = projects[projects.length - 1].projectNumber + 1000;
        }

      }
    })

    this.dataForm = this.formBuilder.group({
      title: ['', [<any>Validators.required]],
      client:""
    });
  }

  onClick() {
    debugger
    if (this.dataForm.valid) {
      let newProject: Project = new Project(this.title, this.projectNumber, this.selectedClient);
      this.save.emit({ event: event, project: newProject });
      this.dataForm.reset();
    }
  }

  onSubmit(value: string) {
    this.submitted = true;
  }

}
