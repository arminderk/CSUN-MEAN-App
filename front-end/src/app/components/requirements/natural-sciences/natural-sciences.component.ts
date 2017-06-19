import { Component, OnInit } from '@angular/core';
import {AddClassService} from '../../../services/add-class.service';

@Component({
  selector: 'app-natural-sciences',
  templateUrl: './natural-sciences.component.html',
  styleUrls: ['./natural-sciences.component.css']
})
export class NaturalSciencesComponent implements OnInit {

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
