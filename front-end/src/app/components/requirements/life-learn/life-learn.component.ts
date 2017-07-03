import { Component, OnInit } from '@angular/core';
import {AddClassService} from '../../../services/add-class.service';

@Component({
  selector: 'app-life-learn',
  templateUrl: './life-learn.component.html',
  styleUrls: ['./life-learn.component.css']
})
export class LifeLearnComponent implements OnInit {

  lifeLearn = [
  {
  className:"AAS 230. Asian Americans and the Media",
  units: 3,
  url: 'http://catalog.csun.edu/academics/aas/courses/aas-230/'
  },
  {
  className:"COMP 100. Computers: Their Impact and Use",
  units: 3,
  url: 'http://catalog.csun.edu/academics/comp/courses/comp-100/'
  },
  {
  className:"COMS 150. Introduction to Communication Studies",
  units: 3,
  url: 'http://catalog.csun.edu/academics/coms/courses/coms-150/'
  },
  {
  className:"HSCI 131. Health and Society",
  units: 3,
  url: 'catalog.csun.edu/academics/hsci/courses/hsci-131/'
  },


  ];

  constructor(private ac:AddClassService) { }

  ngOnInit() {
  }

    addClass(theClass, units, url){

    // this.transferClass.emit({theClass:theClass, units:units});
    this.ac.serveClass(theClass, units, url);
   
  }


}
