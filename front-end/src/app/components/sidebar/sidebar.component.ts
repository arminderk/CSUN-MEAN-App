import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AddClassService } from '../../services/add-class.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  show: boolean = true;
 

  @Output("checkClass") checkForClasses: EventEmitter<any> = new EventEmitter();

  constructor(private ac: AddClassService) { }

  ngDoCheck() {

    //add to the sidebar if not null
    // if (this.ac.theValue != null) {
    //   // this.show = true;
    // }

  }

  removeClass(i){
    console.log('deexnits');
    if(this.ac.schedule == null){
      this.show = true;
    }
    this.ac.deleteClass(i);
  }


}
