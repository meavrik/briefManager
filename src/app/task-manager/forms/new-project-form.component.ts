import { Store } from './../store.service';
import { Project } from './../task-manager-projects/project.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'new-project-form',
  template: `
    <form [formGroup]="dataForm" style="height:150px">
        <input formControlName="name" type="text" pInputText [(ngModel)]="name" placeholder="שם"/>
        <p-spinner formControlName="projectNumber" step="1000" [(ngModel)]="projectNumber" placeholder="מספר קטלוגי" [min]='1000'></p-spinner>

         <p-dropdown class="input" 
         formControlName="client" 
         [options]="clients" 
         [(ngModel)]="selectedClient" 
         [style]="{'width':'160px','direction':'rtl'}" 
         [required]="true"
         scrollHeight="100px"
         >
        </p-dropdown>
        <button pButton type="button" [disabled]="!dataForm.valid" (click)="onClick()" label="שמור" [style]="{'text-align':'left'}"></button>
    </form>
  `,
  styles: []
})
export class NewProjectFormComponent implements OnInit {

  dataForm: FormGroup;
  name: string;
  clients: any[] = [];
  projectNumber: number;
  selectedClient;

  @Output() save = new EventEmitter<any>();

  constructor(private store: Store, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      projectNumber: ['', [Validators.required]],
      client: '',
    });

    this.store.clients.subscribe(clients => this.clients = [...clients]);

    if (this.store.projects.subscribe(projects => {
      if (projects && projects.length) {
        this.projectNumber = projects[projects.length - 1].projectNumber + 1000;
      }
    })

  }

  onClick() {
    if (this.dataForm.valid) {
      let newProject: Project = new Project(this.name, this.projectNumber, this.selectedClient);
      this.save.emit({ event: event, project: newProject });
      this.name = "";
    }
  }

}
