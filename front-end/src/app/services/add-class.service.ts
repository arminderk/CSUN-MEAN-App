import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { AuthService } from '../services/auth.service';


@Injectable()
export class AddClassService {

  schedule = [];
  updateFlag = false;
  index: number;
  currTitle: String;

  constructor(private http: Http, private auth: AuthService) { }

  serveClass(theClass: string, units: number, url: string) {

    this
      .schedule
      .push({ theClass: theClass, units: units, url: url });
  }

  getClasses() {
    if (this.schedule != null) {
      return this.schedule;
    }
  }

  deleteClass(i) {
    this
      .schedule
      .splice(this.schedule.indexOf(i), 1);
    console.log(this.schedule);
  }
  //add users schedule to DB
  addToDB(schedule, title) {
    let body = {
      title: title,
      schedule: schedule
    }
    let headers = new Headers();
    this.auth.loadToken();
    headers.append('Authorization', this.auth.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/profUp', body, { headers: headers })
      .map(res => res.json());
  }

  //delete specefied schedule from DB
  deleteSched(index) {
    let val = { val: index };
    let headers = new Headers();
    this.auth.loadToken();
    headers.append('Authorization', this.auth.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/delSched', val, { headers: headers })
      .map(res => res.json());
  }

  updateSched(title) {
    console.log('updated schedule is ');
    console.log(this.schedule);
    let body = {
      index: this.index,
      title: title,
      content: this.schedule
    }

    let headers = new Headers();
    this.auth.loadToken();
    headers.append('Authorization', this.auth.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/upSched', body, { headers: headers })
      .map(res => res.json());
  }



}
