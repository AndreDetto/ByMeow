
import { Component, OnInit } from '@angular/core';

// 7 IMPORT the .service

import { RecordsService } from '../records.service';

// 8 REPEAT / DECLARE the intance created in the providers of the component so here below...

@Component({

  // 19 BIND THE SELECTOR TO THE .HTML
  selector: 'app-emp-info',
  
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.scss'],

  // 9 NEW PROVIDER of the info from the database: our newly created RecordsService

  providers: [RecordsService],    // this is the instanceof this class now i have to access it

})

  // 10 OBJECT now I have to create an objet to access the METHOD and VARIABLE of the SERVICE

  // 11 OBJECT CREATION in the CONSTRUCTOR method

export class EmpInfoComponent implements OnInit {

  // 4 DESTINATION of the data coming from the method in the sercive to get the data out of the database

  infoFromEmployer1: string[] = []
  infoFromEmployer2: string[] = []
  infoFromEmployer3: string[] = []

  // 5 ACCEPT the information snet from the .service

  // 6 DEPENDENCY INJECTION implememt this process so up above here

  
  // 12 this is the object to retrieve the data from the service

  constructor(private daSevice: RecordsService) { }

  // 13 METHOD TO GET THE DATA the constructor works in conjuction with these other methods

  getInfoFromEmp1(){    // DECLARATION of new method
    
    // INFO so now the empty array info here above (step 4)
    this.infoFromEmployer1 = 
    
    // FROM SERVICE daService arrive the info
    this.daSevice.
    // the info from the method getInfoEmp1(): string[]{return this.infoEmp1}
    getInfoEmp1()
  }

  // 14 FOR ALL THE REST of the database...

  getInfoFromEmp2(){
    this.infoFromEmployer2 = this.daSevice.getInfoEmp2()
  }
  getInfoFromEmp3(){
    this.infoFromEmployer3 = this.daSevice.getInfoEmp3()
  }

  // 15 UI now i move to the .html to display a list of the data

  ngOnInit(): void {
  }
  updateEmploye(frm: any){
    this.daSevice.addEmploye(frm.value.location)
  }




}
