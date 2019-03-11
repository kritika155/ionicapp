import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor() { }
  customers: any = [
    {id:1, name:'Vivek',email:'vivek@pyther.com', phone:'', address:"India"},
    {id:2, name:'Amit',email:'abha@pyther.com',phone:'' ,address:"India"}
  ];
getCustomers(){
  return this.customers;

}
}
