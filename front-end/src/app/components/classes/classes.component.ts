import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {BasicSkillsComponent} from '../requirements/basic-skills/basic-skills.component';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css'],
})
export class ClassesComponent implements OnInit {
 @Output() transferSched: EventEmitter<any> = new EventEmitter();

  theValue = [];
  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(){

    this.transferSched.emit(null);
  }

  callClass(getClass:{theClass:string, units:number}){
    // console.log(num.test);
    this.theValue.push({getClass:getClass.theClass,units:getClass.units});
    return this.theValue;
        // this.transferSched.emit(null);
  }

  getValue(){
    console.log(this.theValue);
    return this.theValue;
  }

 onSubmit(){
    console.log("pls b0ss");
    // console.log(this.ac.getClasses());

  }
}
