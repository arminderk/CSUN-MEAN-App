import {Injectable} from '@angular/core';

@Injectable()
export class AddClassService {

  schedule = [];
  theValue:any;

  constructor() {}

  serveClass(theClass : string, units : number, url: string) {

    // return this.schedule = {
    //   theClass,
    //   units
    // };
    this.theValue = {
       theClass: theClass,
      units: units
    }

    this.schedule.push({
       theClass: theClass,
      units: units,
      url:url
    });
    console.log(this.schedule);

  }

  getClasses() {
    if (this.schedule != null) {
      // console.log(this.schedule.units);
      
    return this.schedule;
    // return this.schedule.theClass;
  }
  
}

deleteClass(i){
  this.schedule.splice(this.schedule.indexOf(i),1);
  console.log(this.schedule);
}

}
