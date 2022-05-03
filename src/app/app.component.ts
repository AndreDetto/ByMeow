import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ByMeow';

  public name = 'Andre, try to get ANGULAR right!';
  public another = 'Adding again between {{...}}';

  public image = '/assets/Knowledge.png'

  public value = ''

  onClick(){
    console.log('You have pressed it, have you...');
  }
}
