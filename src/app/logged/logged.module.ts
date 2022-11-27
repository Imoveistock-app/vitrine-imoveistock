import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoggedRouteModule } from "./logged.route";
import { SearchPageComponent } from './search-page/search-page.component';
import { LoggedComponent } from './logged.component';
import { SwiperModule } from 'swiper/angular';
import { AppComponent } from '../app.component';

@NgModule({
  declarations: [
    LoggedComponent,
    SearchPageComponent,
  ],
  imports: [
    CommonModule,
    LoggedRouteModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule
  ],
  schemas: [],
  bootstrap: [AppComponent]

})
export class LoggedModule { }
