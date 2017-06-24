import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AddClassService } from '../../services/add-class.service';
import { AuthService } from '../../services/auth.service';

@Component({ selector: 'app-sidebar', templateUrl: './sidebar.component.html', styleUrls: ['./sidebar.component.css'] })
export class SidebarComponent {

  show: boolean = true;
  user: Object;

  @Output("checkClass") checkForClasses: EventEmitter<any> = new EventEmitter();

  constructor(private ac: AddClassService, private auth: AuthService) { }

  ngDoCheck() {

    // add to the sidebar if not null if (this.ac.theValue != null) {   // this.show
    // = true; }

  }

  removeClass(i) {
    // console.log('deexnits'); if(this.ac.schedule == null){   this.show = true; }
    this
      .ac
      .deleteClass(i);
  }

  saveToDb(sched) {

    this.auth.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
      err => {
        console.log(err);
        return false;
      });
      
    this.ac.addToDB(sched);

    this.ac.addToDB(sched)
      .subscribe(data => {
        if (data.success) {
          console.log('success!');
        } else {
          console.log('error :(');
        }
      });
  }

}
