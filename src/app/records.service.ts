import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  // .0 I create employer_info and records.service for DEPENDENCY INJECTION

  // 1 START create database of three employee

  infoEmp1 : string[] = ['Kate Moss', 'a123', 'km@mail.com'] 
  infoEmp2 : string[] = ['Nat Portman', 'b456', 'np@mail.com'] 
  infoEmp3 : string[] = ['Scarlett J', 'c789', 'sc@mail.com'] 

  // 2 Return empolyee data: RETRIEVE THE DATA so i creat e a method

  getInfoEmp1(): string[]{
    return this.infoEmp1
  }
  getInfoEmp2(): string[]{
    return this.infoEmp2
  }
  getInfoEmp3(): string[]{
    return this.infoEmp3
  }

  // 3 RECEIVE --> now I need the array in the EMP-INFO.COMPONENT.TS to RECEIVE the data I've retrieved

  addEmploye(employe: string){
    this.infoEmp1.push(employe)
    this.infoEmp2.push(employe)
    this.infoEmp3.push(employe)
    return this.infoEmp1
  }

  constructor() { }
}
