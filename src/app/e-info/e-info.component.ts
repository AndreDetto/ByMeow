import { Component, OnInit } from '@angular/core';

//AND HERE I CRATE THE IMPORT FROM THE DATA SERVICES

import { DataService } from '../data.service'; 

/*  SO THE IMPORT ->{DATA SERVICE} -> AND I GIVE THE PATH TO THOSE/THAT FILE
//SO I'VE WROTE A METHOD TO GET DATA FROM A RECORD, HERE I TELL IT TO ANGULAR,
//WE ARE BASICALLY GIVING ANGULAR AN INSTANCE TO PERFORM A PARTICULAR TASK AND SO
WE NEED TO INCLUDE IT IN THE PROVIDERS AREA AS WELL AS IT PROVIDE  SOMETHING
*/

@Component({

//HERE MY OWN PROVIDER: ADDED TO THE COMPONENT AS A PROVIDER OF DATA.
  providers: [DataService],
//NOW TO ACCESS ALL THE METHOD IN SERVICE CLASS I HAVE CREATED I USE A PROPERTY
//move to the constructor method down here

  selector: 'app-e-info', // -> bring the selector to the main component app.component.html to 
  templateUrl: './e-info.component.html',
  styleUrls: ['./e-info.component.scss']

})

export class EInfoComponent implements OnInit {

  infoReceived1 : string[] = []; //here I create a component for Angular Services

  infoReceived2 : string[] = []; //these services are meant to retrieve info from an element...
  infoReceived3 : string[] = [];

  //to retrive the info I create a function to. but first I need to buid a record.
  //I create those record in the data.service.ts file I've generated with --> NG G C SEVICE DATA

  getInfoFromService1(){
    this.infoReceived1 = this.aService.getInfo1()
    //so I tell to get the info  throught the service on info 1
  } 
  //apply the same method for the other element
  getInfoFromService2(){
    this.infoReceived2 = this.aService.getInfo2() // -> push the info to infoReceived2
  } 
  getInfoFromService3(){
    this.infoReceived3 = this.aService.getInfo3()
  }
//now i display all on the UI in html

  // so here the property to access the instance of service created (DATASERVICE),
  // I make use of a property in the consrtuctor and i call it as I want (aService)
  
  constructor(private aService: DataService) { }

  //so with the help of this property I get info from the service class 

  ngOnInit(): void {
  }

}
