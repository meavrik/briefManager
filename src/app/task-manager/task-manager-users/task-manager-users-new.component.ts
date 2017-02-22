import { SelectItem } from 'primeng/primeng';
import { User } from './user.model';
import { UsersService } from './users.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'task-manager-users-new',
  template: `
    <form [formGroup]="dataForm" >
        <input formControlName="name" type="text" pInputText [(ngModel)]="name" placeholder="שם משתמש"/>
        <p-dropdown class="input" formControlName="avatar" [options]="avatars" [(ngModel)]="selectedAvatar" [style]="{'width':'120px'}" [required]="true">
            <template let-avatar pTemplate="item">
                <div class="ui-helper-clearfix" style="position: relative;height: 25px;">
                    <img src="./resources/starwars/avatar_{{avatar.value}}.jpeg" style="height:25px;position:absolute;top:1px;left:1px"/>
                    <div style="font-size:14px;float:right;margin:4px">{{avatar.label}}</div>
                </div>
            </template>
        </p-dropdown>
        
        <button pButton type="button" (click)="onClick()" label="שמור" [style]="{'text-align':'left'}"></button>
    </form>
  `,
  styles: []
})
export class TaskManagerUsersNewComponent implements OnInit {

  dataForm: FormGroup;
  name: string;
  selectedAvatar: number;
  avatars: SelectItem[] = [
    { label: "R2D2", value: 1 },
    { label: "Chowee", value: 2 },
    { label: "C3PO", value: 3 },
    { label: "Vader", value: 4 },
    { label: "Rebel", value: 5 },
    { label: "Boba", value: 6 },
    { label: "Tropper", value: 7 },
    { label: "Vader", value: 8 },
    { label: "Vader", value: 9 },
    ]
  @Output() save = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService, ) {

  }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({
      name: '',
      avatar: '',
      type: '',
    });
  }

  onClick() {
    let newUser: User = new User(this.name,this.selectedAvatar);
    this.save.emit({ event: event, user: newUser });
  }

}
