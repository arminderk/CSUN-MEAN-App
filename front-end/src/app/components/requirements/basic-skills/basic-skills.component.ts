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
    },
    {
    className:"AAS 115. Approaches to University Writing",
    units: 3,
    url: 'http://catalog.csun.edu/academics/aas/courses/aas-115/'
    },
    {
    className:"ENGL 113B. Approaches to University Writing B",
    units: 3,
    url: 'http://catalog.csun.edu/academics/engl/courses/engl-113b/'
    },
    {
    className:"ENGL 115. Approaches to University Writing",
    units: 3,
    url: 'http://catalog.csun.edu/academics/engl/courses/engl-115/'
    }
  ];

  oralComs = [
     {
    className:"AAS 151. Fundamentals of Public Speaking",
    units: 3,
    url: 'http://catalog.csun.edu/academics/aas/courses/aas-151/'
    },
    {
    className:"COMS 151/L. Fundamentals of Public Speaking and Lab",
    units: 3,
    url: 'http://catalog.csun.edu/academics/coms/courses/coms-151l/'
    },
    {
    className:"CAS 151. Fundamentals of Public Speaking",
    units: 3,
    url: 'http://catalog.csun.edu/academics/cas/courses/cas-151/'
    },
    {
    className:"CHS 151. Freshman Speech Communication",
    units: 3,
    url: 'catalog.csun.edu/academics/chs/courses/chs-151/'
    },
    {
    className:"AFRS 151. Freshman Speech Communication",
    units: 3,
    url: 'http://catalog.csun.edu/academics/afrs/courses/afrs-151/c'
    },
  ]

  constructor(private ac:AddClassService) { }

  ngOnInit() {
  }

  //pass class info to the serve class service
  addClass(theClass, units, url){

    // this.transferClass.emit({theClass:theClass, units:units});
    this.ac.serveClass(theClass, units, url);
   
  }


}
