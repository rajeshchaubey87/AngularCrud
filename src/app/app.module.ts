import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { ListemployeesComponent } from './employees/listemployees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { Component } from '@angular/core/src/metadata/directives';
import { EmployeeDetialsComponent } from './employee-detials/employee-detials.component';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { UserService}    from './services/user.service';
import { WishlistComponent } from './components/wishlist/wishlist.component';


const appRoutes: Routes= [
  {path:'list', component:ListemployeesComponent},
  {path:'create', component:CreateEmployeeComponent},
  {path:'details', component:EmployeeDetialsComponent},
  {path:'one', component:OneComponent},
  {path:'two', component:TwoComponent},
  {path:'wishlist', component:WishlistComponent},
  {path:'', redirectTo:'/list',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListemployeesComponent,
    CreateEmployeeComponent,
    EmployeeDetialsComponent,
    OneComponent,
    TwoComponent,
    WishlistComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
