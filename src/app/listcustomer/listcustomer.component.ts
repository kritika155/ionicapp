import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-listcustomer',
  templateUrl: './listcustomer.component.html',
  styleUrls: ['./listcustomer.component.scss'],
})
export class ListcustomerComponent implements OnInit {
list=[];
  constructor(private CustomerService: CustomerService) { }

  ngOnInit() {
   
  
    this.list=this.CustomerService.getCustomers();
  
}

}
