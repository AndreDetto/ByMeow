import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

 // 8 now I import the service that I have created
  
import { DutyService } from '../duty.service';

// 9 this one to tell angular that when the component is created the service instance is created as well in the providers


@Component({
  selector: 'app-e-duty',
  templateUrl: './e-duty.component.html',
  styleUrls: ['./e-duty.component.scss'],
  providers: [DutyService]  // 10 this is the new provider of data!
})

// 11 now let's access this instance of service with a property. I do it in the constructor method at the bottom

export class EDutyComponent implements OnInit {

  dutyReceived1 : string [] = []; // 1 first step i create the data I want to retrive
  dutyReceived2 : string [] = [];
  dutyReceived3 : string [] = [];

  // 2 to get this I create a method
  // 3 so here is the method leave it empty for now -> getThisData1(){}
  // 4 create the database in the duty.ts file

 
  // 13 with this we get the data and push it to the array of data created at the beginning

  getDutyFromService1(){     
    this.dutyReceived1 = this.aService.getDuty1()
  }
  getDutyFromService2(){
    this.dutyReceived2 = this.aService.getDuty2()
  }
  getDutyFromService3(){
    this.dutyReceived3 = this.aService.getDuty3()
  }

  // 14 now create the UI in the html

  // 12 here we add it at the constructor and the we move to fill the function created before (step 3)to retrive the data

  constructor(private aService: DutyService) {}

  ngOnInit(): void {
  }

  // 24 here I create the method to let update the record from the UI
  updateDuties(frm: any) {
    this.aService.addDuty(frm.value.location)
  }
  // 25 I update 'any' kind of 'frm' and i add. the service with addDuty to be created in the duty.service.ts
}
  // 29 now the addDuty works so i can add the final lines to the .html