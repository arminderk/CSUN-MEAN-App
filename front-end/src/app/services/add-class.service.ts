import {Injectable, Input, Output, EventEmitter} from '@angular/core';

@Injectable()
export class AddClassService {

  schedule : {
    theClass: string,
    units: number
  };
  // @Output() outputSched = new EventEmitter();

  constructor() {}

  serveClass(theClass : string, units : number) {

    return this.schedule = {
      theClass,
      units
    };

  }

  getClasses() {
    // console.log(this.schedule.theClass); console.log('deez nuts');
    if (this.schedule != null) {
      console.log(this.schedule.theClass);
      
    return this.schedule.theClass;
    }
  }

}
