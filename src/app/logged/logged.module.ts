import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoggedRouteModule } from "./logged.route";
import { SearchPageComponent } from './search-page/search-page.component';
import { LoggedComponent } from './logged.component';
import { SwiperModule } from 'swiper/angular';
import { AppComponent } from '../app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { VisitsComponent } from './visits/visits.component';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { NgxMaskModule } from 'ngx-mask';
import { ExpressProposalComponent } from './express-proposal/express-proposal.component';
@NgModule({
  declarations: [
    LoggedComponent,
    SearchPageComponent,
    PropertyDetailComponent,
    VisitsComponent,
    ModalLoginComponent,
    ExpressProposalComponent,
  ],
  imports: [
    CommonModule,
    LoggedRouteModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxMaskModule.forRoot(),
    SwiperModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  schemas: [],
  bootstrap: [AppComponent]

})
export class LoggedModule { }
