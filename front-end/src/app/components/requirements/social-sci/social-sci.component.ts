import { Component, OnInit } from '@angular/core';
import {AddClassService} from '../../../services/add-class.service';

@Component({
  selector: 'app-social-sci',
  templateUrl: './social-sci.component.html',
  styleUrls: ['./social-sci.component.css']
})
export class SocialSciComponent implements OnInit {

  social = [
    {
    className:"AAS 210. History of Asians in America",
    units: 3,
    url: 'http://catalog.csun.edu/academics/aas/courses/aas-210/'
    },
    {
    className:"ANTH 250. Archaeology of Warfare",
    units: 3,
    url: 'http://catalog.csun.edu/academics/anth/courses/anth-250/'
    },
    {
    className:"ANTH 302. Introduction to Applied Anthropology",
    units: 3,
    url: 'http://catalog.csun.edu/academics/anth/courses/anth-302/'
    },
    {
    className:"ECON 160. Principles of Microeconomics",
    units: 3,
    url: 'http://catalog.csun.edu/academics/econ/courses/econ-160/'
    },
    {
    className:"SOC 150. Introductory Sociology",
    units: 3,
    url: 'catalog.csun.edu/academics/soc/courses/soc-150/'
    },

  ];
  constructor(private ac:AddClassService) { }

  ngOnInit() {
  }

  addClass(theClass, units, url){
    this.ac.serveClass(theClass, units, url);
   
  }
}
