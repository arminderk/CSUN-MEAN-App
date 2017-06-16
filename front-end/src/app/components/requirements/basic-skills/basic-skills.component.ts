import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {AddClassService} from '../../../services/add-class.service';


@Component({
  selector: 'app-basic-skills',
  templateUrl: './basic-skills.component.html',
  styleUrls: ['./basic-skills.component.css']
})
export class BasicSkillsComponent implements OnInit {
    @Output() outputSched: EventEmitter<{theClass:string, units:number}> = new EventEmitter();

  // basicSkills  = ['FirstClass', '2ndClass', '3rdclass']; 
  basicSkills  = [
    {
    className:"testClass1",
    units: 3
    },
    {
    className:"testClass2",
    units: 2
    }
  ];

  testSchedule = [];

  constructor(private ac:AddClassService) { }

  ngOnInit() {
  }

  addClass(theClass, units){

    this.outputSched.emit({theClass:theClass, units:units});
    this.ac.serveClass(theClass, units);
   
  }

  

   onSubmit(){
    console.log("pls b0ss");
  }


}
