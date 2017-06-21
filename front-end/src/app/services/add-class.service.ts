import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AddClassService {

  schedule = [];
  theValue : any;

  constructor(private http : Http) {}

  serveClass(theClass : string, units : number, url : string) {

    // this.theValue = {    theClass: theClass,   units: units }

    this
      .schedule
      .push({theClass: theClass, units: units, url: url});
    console.log(this.schedule);

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

  addToDB(schedule) {
    // console.log(JSON.stringify(schedule[0]));
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
     return this.http.post('http://localhost:3000/schedules/addClass', JSON.stringify(schedule), { headers: headers })
      .map(res => res.json());
  }

}
