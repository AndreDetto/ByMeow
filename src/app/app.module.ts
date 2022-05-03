import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'; //two way binding

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AComponentComponent } from './a-component/a-component.component';
import { AImageComponent } from './a-image/a-image.component';
import { FormComponentComponent } from './form-component/form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponentComponent,
    AImageComponent,
    FormComponentComponent
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
