import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {BasicSkillsComponent} from '../requirements/basic-skills/basic-skills.component';
import { AddClassService } from '../../services/add-class.service';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css'],
})
export class ClassesComponent implements OnInit {
//  @Output() transferSched: EventEmitter<any> = new EventEmitter();

  theValue ;
  constructor(private ac:AddClassService) { }

  ngOnInit() {
  }

 


  
  getValue(){

    if(this.theValue != null){
      // console.log(this.theValue); to uncomment maybe
      // console.log(this.theValue.getClass); //JSON stringify
    }

    // return this.theValue;
  }

}
