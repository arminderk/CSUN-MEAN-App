import { Component, OnInit } from '@angular/core';
import {AddClassService} from '../../services/add-class.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userSched = [];
  constructor(private ac : AddClassService, private auth: AuthService, private router: Router) {}

  //load the users userScheds
  ngOnInit() {
    this.auth.getProfile().subscribe(profile => {
      this.userSched = profile.user.sched;
    },
    err => {
      console.log(err);
      return false;
    });
  }

  deleteSched(index){
    console.log(index);
    this
      .userSched
      .splice(this.userSched.indexOf(index), 1);
    //subscribe here
     this.ac.deleteSched(index).subscribe(data => {
    },
    err => {
      console.log(err);
      return false;
    });
  }

  editSched(index){

    console.log(index);
    console.log(this.userSched);
    //load proper schedule content into the sidebar
     for(let i = 0; i < this.userSched[index].length; i++){
          this.ac.schedule.push(this.userSched[index][i]);
      }
     this.ac.updateFlag = true; 
     this.router.navigate(['classes']);
  
  }

}
