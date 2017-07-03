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
    url: 'http://catalog.csun.edu/academics/ph`ys/courses/astr-352/'
    },
    {
    className:"BIOL 100. Introductory Biologyc",
    units: 3,
    url: 'catalog.csun.edu/academics/biol/courses/biol-100/'
    },
    {
    className:"CHEM 110. Chemistry in Action",
    units: 3,
    url: 'http://catalog.csun.edu/academics/chem/courses/chem-110/'
    },
    {
    className:"GEOG 101. The Physical Environment",
    units: 3,
    url: 'http://catalog.csun.edu/academics/geog/courses/geog-101/'
    },
  ];

  constructor(private ac:AddClassService) { }

  ngOnInit() {
  }

  //pass class info to the serve class service
  addClass(theClass, units, url){

    this.ac.serveClass(theClass, units, url);
   
  }
}
