import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {AddClassService} from '../../../services/add-class.service';


@Component({
  selector: 'app-basic-skills',
  templateUrl: './basic-skills.component.html',
  styleUrls: ['./basic-skills.component.css']
})
export class BasicSkillsComponent implements OnInit {

  // @Output("transfer") transferClass: EventEmitter<{theClass:string, units:number}> = new EventEmitter();

  //basic skills (writing)
  basicSkills  = [
    {
    className:"AAS 113B. Approaches to University Writing B",
    units: 3,
    url: 'http://catalog.csun.edu/academics/aas/courses/aas-113b/'
    },
    {
    className:"AAS 114B. Approaches to University Writing B",
    units: 3,
    url: 'http://catalog.csun.edu/academics/aas/courses/aas-114b/'
    }
  ];

  constructor(private ac:AddClassService) { }

  ngOnInit() {
  }

  //pass class info to the serve class service
  addClass(theClass, units, url){

    // this.transferClass.emit({theClass:theClass, units:units});
    this.ac.serveClass(theClass, units, url);
   
  }


}
