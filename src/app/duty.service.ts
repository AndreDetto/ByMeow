import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DutyService {

      //  5 so now I create the database

  duty1: string[]=['study', 'summarize', 'practice']
  duty2: string[]=['train', 'run', 'strenghten']
  duty3: string[]=['healthy life', 'recover', 'avoid vices']
  
    // 6 now that I have the records I create a method to return the records

  getDuty1(): string[]{
    return this.duty1
  }
  getDuty2(): string[]{
    return this.duty2
  }
  getDuty3(): string[]{
    return this.duty3
  }
     // 7 move back to e-duty.ts for dependency injection whatever that means

  // 26 here the method to add the duty .addDuty
  addDuty(duty : any){ // remember specify the kind of
    this.duty1.push(duty)
    this.duty2.push(duty)
    this.duty3.push(duty)
    return this.duty1
  }
  // 27 so this method get duty (element) from the component and push it to the array so I have to return it as well
  
  // 28 back to .ts
  
  constructor() { }
}
