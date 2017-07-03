import { Component, OnInit } from '@angular/core';
import { AddClassService } from '../../services/add-class.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userSched = [];
  constructor(private ac: AddClassService, private auth: AuthService, private router: Router, private flash: FlashMessagesService) { }

  //load the users userScheds
  ngOnInit() {
    this.auth.getProfile().subscribe(profile => {
      this.userSched = profile.user.sched;
      console.log(this.userSched);
    },
      err => {
        console.log(err);
        return false;
      });
  }

  deleteSched(index) {
    console.log(index);
    this.ac.currTitle = '';
    this
      .userSched
      .splice(index, 1);
    console.log(this.userSched);
    this.ac.deleteSched(index).subscribe(data => {
    },
      err => {
        console.log(err);
        return false;
      });
    this.flash.show('You have deleted a schedule!', {
      cssClass: 'alert-danger',
      timeout: 2000
    });
  }

  editSched(index) {

    // console.log(index);
    this.ac.index = index;
    console.log(this.userSched);
    //load proper schedule content into the sidebar
    if (this.ac.schedule.length > 0) {
      this.ac.schedule = []; //empty schedule if it contains something
    }
    for (let i = 0; i < this.userSched[index].schedule.length; i++) {
      this.ac.schedule.push(this.userSched[index].schedule[i]);
    }
    this.ac.currTitle = this.userSched[index].title;
    this.ac.updateFlag = true;
    this.router.navigate(['classes']);

  }

}
