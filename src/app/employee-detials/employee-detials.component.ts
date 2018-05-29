import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-detials',
  templateUrl: './employee-detials.component.html',
  styleUrls: ['./employee-detials.component.css']
})
export class EmployeeDetialsComponent  {

      firstName:string ="Rajesh";
      lastName:string="Chaubey";
      gender:string="Male";
      age:number=28;
      showDetails:boolean=false;

      toggleDetails():void{
        this.showDetails= !this.showDetails;
      }


  
}
