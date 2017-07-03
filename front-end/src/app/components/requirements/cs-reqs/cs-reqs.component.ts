import { Component, OnInit } from '@angular/core';
import { AddClassService } from '../../../services/add-class.service';

@Component({
  selector: 'app-cs-reqs',
  templateUrl: './cs-reqs.component.html',
  styleUrls: ['./cs-reqs.component.css']
})
export class CsReqsComponent implements OnInit {

  csClasses = [
    {
    className:"COMP 110/L. Introduction to Algorithms and Programming and Lab",
    units: 4,
    url: 'http://catalog.csun.edu/academics/comp/courses/comp-110l/'
    },
    {
    className:"COMP 222. Computer Organization",
    units: 3,
    url: 'http://catalog.csun.edu/academics/comp/courses/comp-222/'
    },
    {
    className:"COMP 282. Advanced Data Structures",
    units: 3,
    url: 'http://catalog.csun.edu/academics/comp/courses/comp-282/'
    },
    {
    className:"COMP 333. Concepts of Programming Languages",
    units: 3,
    url: 'http://catalog.csun.edu/academics/comp/courses/comp-333/'
    },
    {
    className:"COMP 380/L. Introduction to Software Engineering",
    units: 3,
    url: 'http://catalog.csun.edu/academics/comp/courses/comp-380l/'
    }
  ];

  constructor(private ac: AddClassService) { }

  ngOnInit() {
  }

  addClass(theClass, units, url) {

    // this.transferClass.emit({theClass:theClass, units:units});
    this.ac.serveClass(theClass, units, url);

  }
}
