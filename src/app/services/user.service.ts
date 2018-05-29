import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }
  users:string[] = ["Rajesh","Atish","Rohan","Mohan"];

  getFirstUser(){
    return this.users[0];
  }

}
