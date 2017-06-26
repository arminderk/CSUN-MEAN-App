import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AddClassService } from '../../services/add-class.service';
import { AuthService } from '../../services/auth.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';


@Component({ selector: 'app-sidebar', templateUrl: './sidebar.component.html', styleUrls: ['./sidebar.component.css'] })
export class SidebarComponent {

  user: Object;

  @Output("checkClass") checkForClasses: EventEmitter<any> = new EventEmitter();

  constructor(private ac: AddClassService, private auth: AuthService, private router: Router) { }
  
   ngOnInit() {
    this.auth.getProfile().subscribe(profile => {
      this.user = profile.user;
      
      // //edit the selected class
      // if(this.ac.index != undefined && profile.user.sched.length > 0){
      //   for(let i = 0; i < profile.user.sched[this.ac.index].length; i++){
      //     this.ac.schedule.push(profile.user.sched[this.ac.index][i]);
      //   }
      //   this.ac.index = undefined; //reset the index
      //   //set something to false?
      // }
      
    },
    err => {
      console.log(err);
      return false;
    });

    //load chosen class
  }

  removeClass(i) {
    this
      .ac
      .deleteClass(i);
  }

  
  saveToDb(sched) {

      //update existing schedule
      if(this.ac.updateFlag){

        this.ac.updateSched().subscribe(data => {
        if (data.success) {
          console.log('schedule updated!');
          this.router.navigate(['dashboard']);
        this.ac.updateFlag = false; //put this inside the subecribe statement
          this.ac.schedule = []; //reset schedule list
        } else {
          console.log('error in schedule updating :(');
        }
      });

      }else{

        //add new schedule to dashboard
        this.ac.addToDB(sched).subscribe(data => {
        if (data.success) {
          console.log('class schedule added!');
          this.router.navigate(['dashboard']);
          this.ac.schedule = []; //reset schedule list
        } else {
          console.log('error adding schedule :(');
        }
      });

      }
      
      
  }

  cancelEdit(){
    this.ac.updateFlag = false;
    this.router.navigate(['dashboard']);
    this.ac.schedule = [];
    console.log(this.ac.schedule);
  }

}
