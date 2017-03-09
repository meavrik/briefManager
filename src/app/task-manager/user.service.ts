import {UsersService} from './task-manager-users/users.service';
import { User } from './task-manager-users/user.model';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  
  userInfo:User;

  constructor() 
  { 
      
  }

}
