import { Component, OnInit } from '@angular/core';
import {AddClassService} from '../../../services/add-class.service';

@Component({
  selector: 'app-artsn-hum',
  templateUrl: './artsn-hum.component.html',
  styleUrls: ['./artsn-hum.component.css']
})
export class ArtsnHumComponent implements OnInit {

  artsNHum = [
    {
    className:"AAS 220. Survey of Asian American Literature",
    units: 3,
    url: 'http://catalog.csun.edu/academics/aas/courses/aas-220/'
    },
    {
    className:"AFRS 245. African-American Literature Since 1930",
    units: 3,
    url: 'http://catalog.csun.edu/academics/afrs/courses/afrs-245/'
    },
    {
    className:"ART 114. World Arts: Asia",
    units: 3,
    url: 'http://catalog.csun.edu/academics/art/courses/art-114/'
    },
    {
    className:"MUS 107. Music Today",
    units: 3,
    url: 'http://catalog.csun.edu/academics/mus/courses/mus-107/'
    },
    {
    className:"MUS 108. Music in Film",
    units: 3,
    url: 'http://catalog.csun.edu/academics/mus/courses/mus-108/'
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
