import { Component, OnInit } from '@angular/core';
import {AddClassService} from '../../../services/add-class.service';


@Component({
  selector: 'app-comp-cult',
  templateUrl: './comp-cult.component.html',
  styleUrls: ['./comp-cult.component.css']
})
export class CompCultComponent implements OnInit {


  compCult = [
    {
    className:"AAS 100. Introduction to Asian American Studies",
    units: 3,
    url: 'catalog.csun.edu/academics/aas/courses/aas-100/'
    },
    {
    className:"AIS 101. Introduction to American Indian Studies",
    units: 3,
    url: 'http://catalog.csun.edu/academics/ais/courses/ais-101/'
    },
    {
    className:"ART 112. World Arts: Africa, Oceania and the Americas",
    units: 3,
    url: 'http://catalog.csun.edu/academics/art/courses/art-112/'
    },
    {
    className:"POLS 321. Comparative Political Ideologies",
    units: 3,
    url: 'http://catalog.csun.edu/academics/pols/courses/pols-321/'
    },


  ]



  constructor(private ac:AddClassService) { }

  ngOnInit() {
  }

    addClass(theClass, units, url){
    this.ac.serveClass(theClass, units, url);
   
  }


}
