import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
   

  constructor() { 
   console.log("Hello");
  }

  ngOnInit() {
    console.log("Hello India");
  }

 ngOnChanges() {
      console.log(this);
   
 }


  saveEmployee(empForm:NgForm):void{
    console.log(empForm);
  }

}
