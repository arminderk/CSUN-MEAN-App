import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {AddClassService} from '../../services/add-class.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {
  sideClasses;
  show: boolean = false;
  schedule = [] ;

   @Output() something: EventEmitter<any> = new EventEmitter();

     theValue ;


  constructor(private ac:AddClassService) { }

   ngDoCheck(){
    // if(this.something != undefined){
      this.something.emit(null);
      this.theValue = this.ac.getClasses();
      this.schedule.push(this.theValue);
      this.show = true;

    // }
  }


}
