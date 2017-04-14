import {User} from '../task-manager-users/user.model';
import { SelectItem } from 'primeng/primeng';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'new-user-form',
  template: `
    <form [formGroup]="dataForm" style="height:150px">
        <input formControlName="name" type="text" pInputText [(ngModel)]="name" placeholder="שם משתמש"/>
        <p-dropdown class="input" 
        formControlName="avatar" 
        [options]="avatars"
        [(ngModel)]="selectedAvatar" 
        [style]="{'width':'160px','direction':'rtl'}" 
        [required]="true"
        scrollHeight="100px"
        >
            <ng-template let-avatar pTemplate="item">
                <div class="ui-helper-clearfix" style="position: relative;height: 25px;">
                    <img src="./assets/starwars/avatar_{{avatar.value}}.jpeg" style="height:25px;position:absolute;top:1px;left:1px"/>
                    <div style="font-size:14px;float:right;margin:4px">{{avatar.label}}</div>
                </div>
            </ng-template>
        </p-dropdown>
        
        <button pButton type="button" [disabled]="!dataForm.valid" (click)="onClick()" label="שמור" [style]="{'text-align':'left'}"></button>
    </form>
  `,
  styles: []
})
export class NewUserFormComponent implements OnInit {

  dataForm: FormGroup;
  name: string;
  selectedAvatar: number = 1;

  avatars: SelectItem[] = [
    { label: "מנהל", value: 8 },
    { label: "טראפיק", value: 6 },
    { label: "ארט דירקטור", value: 2 },
    { label: "מעצב", value: 6 },
    { label: "אחר", value: 1 },
  ]
  @Output() save = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      avatar: '',
      type: '',
    });
  }

  onClick() {
    if (this.dataForm.valid) {
      let newUser: User = new User(this.name, this.selectedAvatar);
      this.save.emit({ event: event, user: newUser });
      this.dataForm.reset();
    }
  }

}
