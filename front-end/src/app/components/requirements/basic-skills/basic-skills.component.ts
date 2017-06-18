import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {AddClassService} from '../../../services/add-class.service';


@Component({
  selector: 'app-basic-skills',
  templateUrl: './basic-skills.component.html',
  styleUrls: ['./basic-skills.component.css']
})
export class BasicSkillsComponent implements OnInit {

  // @Output("transfer") transferClass: EventEmitter<{theClass:string, units:number}> = new EventEmitter();

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

  constructor(private ac:AddClassService) { }

  ngOnInit() {
  }

  //pass class info to the serve class service
  addClass(theClass, units){

    // this.transferClass.emit({theClass:theClass, units:units});
    this.ac.serveClass(theClass, units);
   
  }


}
