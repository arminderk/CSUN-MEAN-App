import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {BasicSkillsComponent} from '../requirements/basic-skills/basic-skills.component';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css'],
})
export class ClassesComponent implements OnInit {
//  @Output() transferSched: EventEmitter<any> = new EventEmitter();

  theValue ;
  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(){

    // this.transferSched.emit(null);
  }

  callClass(getClass:{theClass:string, units:number}){

   return this.theValue = {getClass:getClass.theClass,units:getClass.units};

  }

  
  getValue(){

    if(this.theValue != null){
      // console.log(this.theValue); to uncomment maybe
      // console.log(this.theValue.getClass); //JSON stringify
    }

    // return this.theValue;
  }

}
