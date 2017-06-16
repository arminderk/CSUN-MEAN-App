import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {AddClassService} from '../../services/add-class.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {
  sideClasses = [];
  @Input() schedule ;
  @Output() outputSched: EventEmitter<any> = new EventEmitter();

   @Output() something: EventEmitter<any> = new EventEmitter();

// sideClasses = this.ac.getClasses();
  constructor(private ac:AddClassService) { }

   ngDoCheck(){
    // if(this.something != undefined){
    this.something.emit(null);

    // }
  }

  onSubmit(){
    console.log("pls b0ss");
    // console.log(this.ac.getClasses());
        // this.something.emit(null);

  }


  // classToAdd = this.ac.addClass();

 callClass(){
    console.log('i like food');
        // this.transferSched.emit(null);

  }


}
