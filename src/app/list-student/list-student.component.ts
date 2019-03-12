import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss'],
})
export class ListStudentComponent implements OnInit {
  student:any={
    id:'',
    firstname:"",
    lastname:"",
    birthdate:"",
    class:"",
    subject:"",
    teacher:"",
    address:"",
};
students: any = [
  {rollno:1,firstname:'Kritika',lastname:'Roy',birthdate:'12/04/1994',class:1,subject:'hindi',teacher:'mr.ravi',address:"India"},
  {rollno:2,firstname:'Ashish',lastname:'Roy',birthdate:'11/04/199',class:1,subject:'hindi',teacher:'mr.rakesh',address:"India"}
];
list=[];
  constructor(private serviceService: ServiceService,private router :Router) { }

  ngOnInit() {
    this.list=this.serviceService.getStudents();
  }

}
