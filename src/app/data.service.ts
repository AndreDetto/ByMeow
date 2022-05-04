import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //So here I create the records for the element, the employee let's say...
    //the first : is a string type of [array] = []here are the values, like name, ID, email
    info1 : string[]=['Jonh McClain', 'E567', 'jm@abc.net']

    info2 : string[]=['Jonh Doe', 'R678', 'jd@abc.net']
    info3 : string[]=['Jonh Wick', 'T890', 'jw@abc.net']

    //now that the records are created I'll make a METHOD THAT RETURN these empolyee's datas

    getInfo1(): string[]{ //so getInfo1() is the METHOD which is of TYPE STRING :string[]{ 
      return this.info1 // and the function will RETURN THIS. info1 
    }
    getInfo2(): string[]{ // HERE FOR THE REST OF THE RECORDS
      return this.info2 // 
    }
    getInfo3(): string[]{  
      return this.info3
    }
    
   // ALL THIS INFORMATION IS TO BE RETRIEVE IN THE EMPLOYEE COMPONENT CREATED ... MAKING USE DEPENDENCIES
   // GO BACK TO E-INFO.COMPONENT.TS WHERE I AM GOING TO IMPORT THE SERVICES.

  }
