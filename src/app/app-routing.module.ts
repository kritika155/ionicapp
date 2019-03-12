import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { LogoutComponent } from './logout/logout.component'
import { AboutComponent } from './about/about.component'
import { AddcustomerComponent } from './addcustomer/addcustomer.component'
import { ListcustomerComponent } from './listcustomer/listcustomer.component'
import { CustomerComponent } from './customer/customer.component'
import {EditcustomerComponent} from './editcustomer/editcustomer.component';


import { from } from 'rxjs';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'logout',component:LogoutComponent},
  {path:'about',component:AboutComponent},
  {path:'customer',component:CustomerComponent},
  {path:'list-customer',component:ListcustomerComponent},
  {path:'add-customer',component:AddcustomerComponent},
  {path:'editcustomer/:id',component:EditcustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
