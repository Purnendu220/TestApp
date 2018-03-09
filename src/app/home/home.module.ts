import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routingHome } from './home.routing';




@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    routingHome
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
