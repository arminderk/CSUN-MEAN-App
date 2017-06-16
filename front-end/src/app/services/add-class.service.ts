import { Injectable, Input, Output, EventEmitter } from '@angular/core';

@Injectable()
export class AddClassService {

   schedule:{theClass:string, units:number} ;
  // @Output() outputSched = new EventEmitter();

  constructor() { }

  serveClass(theClass:any, units:any){
        //  console.log(theClass) ;
        //  console.log(units) ;
        // this.schedule.theClass = theClass;
        // this.schedule.units = units;
        // console.log('hi');
        // this.outputSched.emit('hello'); 
        return this.schedule={theClass, units};
        // console.log(this.getClasses();)
        // this.getClasses();
        // return this.schedule;
        
        // return this.schedule;
      
        //  this.schedule.push({theClass:theClass, units:units}); 
        //  console.log(this.schedule);
  }

  getClasses(){
      // console.log(this.schedule.theClass);
        // console.log(this.units);
    return this.schedule;
  }


}
