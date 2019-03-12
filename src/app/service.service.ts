import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private router :Router) { }
  students: any = [
    {rollno:1,firstname:'Kritika',lastname:'Roy',birthdate:'12/04/1994',class:1,subject:'hindi',teacher:'mr.ravi',address:"India"},
    {rollno:2,firstname:'Ashish',lastname:'Roy',birthdate:'11/04/199',class:1,subject:'hindi',teacher:'mr.rakesh',address:"India"},
  ];
  getStudents(){
  
    return this.students;
  
  }
  
  getStudentById(id){
    for(var i=0;i<this.students.length;i++)
    {
      if(this.students[i].id==id){
        return this.students[i];
      }
    }
    return null;
  }
  addStudent(student){
      student.id=this.students.length+1;
      this.students.push(student);
      this.getStudents();
  
    }
    updateStudent(student)
  {
    for(var i=0;i<this.students.length;i++){
      if(this.students[i].id==student.id)
      {
        this.students[i]=student;
        break;
      }
      else{
        student.id=this.students.length+1;
        this.students.push(student);
      }
    }
  }
   deleteAllCustomer(){
     this.students=[];
   }
  deleteCustomer(student){
    var list=[];
   for(var i=0;i<this.students.length;i++)
   {
   if(student.id!=(this.students[i].id))
  {
    list.push(this.students[i]);
  }
   }
   this.students=list;
  }
}
