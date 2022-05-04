import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'; //two way binding
// 22 I have added the FormsModule , go back to the component.html


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AComponentComponent } from './a-component/a-component.component';
import { AImageComponent } from './a-image/a-image.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { EInfoComponent } from './e-info/e-info.component';
import { EDutyComponent } from './e-duty/e-duty.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponentComponent,
    AImageComponent,
    FormComponentComponent,
    EInfoComponent,
    EDutyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule //two way binding

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
