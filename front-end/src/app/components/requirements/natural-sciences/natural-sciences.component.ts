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
    className:" ASTR 152. Elementary Astronomy",
    units: 3,
    url: 'http://catalog.csun.edu/academics/phys/courses/astr-152/'
    },
    {
    className:"ASTR 352. Current Developments in Astronomy",
    units: 3,
    url: 'http://catalog.csun.edu/academics/phys/courses/astr-352/'
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
