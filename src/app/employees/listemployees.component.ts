import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  // selector: 'app-listemployees',
  templateUrl: './listemployees.component.html',
  styleUrls: ['./listemployees.component.css']
})
export class ListemployeesComponent implements OnInit {

  employees:Employee[] =[ 
    {
      id:1,
      name:"Mark",
      gender:"male",
      contactPreference:"email",
       email:"mark@in.ibm.com",
       dateOfBirth:new Date ('10/25/1980'),
       department:"IT",
       isActive:true,
       photoPath:"assets/images/mark.png"},

       {
         id:2,
        name:"Marry",
        gender:"female",
        contactPreference:"phone",
        phoneNumber:9818694695,
        dateOfBirth:new Date ('11/20/1980'),
        department:"HR",
        isActive:true,
        photoPath:"assets/images/marry.png"},
  
  {
    id:3,
    name:"John",
    gender:"male",
    contactPreference:"email",
    email:"mark@in.ibm.com",
    dateOfBirth:new Date ('10/20/1985'),
    department:"Hardware",
    isActive:true,
    photoPath:"assets/images/john.png"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
