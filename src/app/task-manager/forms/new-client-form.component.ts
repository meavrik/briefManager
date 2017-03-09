import { ContactInfo } from './../models/contact.model';
import { Client } from './../task-manager-clients/Client';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'new-client-form',
  template: `
    <form [formGroup]="dataForm" style="height:150px">
        <input formControlName="name" type="text" pInputText [(ngModel)]="name" placeholder="שם"/>
        <hr>
        <p>כתובת</p>
        <input formControlName="country" type="text" pInputText [(ngModel)]="country" placeholder="מדינה"/>
        <input formControlName="city" type="text" pInputText [(ngModel)]="city" placeholder="עיר"/>
        <input formControlName="address" type="text" pInputText [(ngModel)]="address" placeholder="כתובת"/>
        <button pButton type="button" [disabled]="!dataForm.valid" (click)="onClick()" label="שמור" [style]="{'text-align':'left'}"></button>
    </form>
  `,
  styles: []
})
export class NewClientFormComponent implements OnInit {

  dataForm: FormGroup;
  name: string;
  address: string;
  city: string;
  country: string;

  @Output() save = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: '',
      address: '',
      city: '',
      country: '',
    });
  }

  onClick() {
    if (this.dataForm.valid) {
      let newClient: Client = new Client(this.name, new ContactInfo(this.country, this.city, this.address));
      this.save.emit({ event: event, client: newClient });
      this.name = "";
      this.address = '';
      this.city = '';
      this.country = '';
    }
  }

}
