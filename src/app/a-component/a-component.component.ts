import { Component, OnInit } from '@angular/core';

@Component({
  selector: './a-component', //a-component
  templateUrl: './a-component.component.html',
  styleUrls: ['./a-component.component.scss']
})
export class AComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}