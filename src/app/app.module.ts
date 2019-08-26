import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { ChooseCategoryComponent } from './choose-category/choose-category.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { FlightDetailComponent } from './flight-detail/flight-detail.component';
import { CountdownTimerModule } from "ngx-countdown-timer";
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NotifierModule } from "angular-notifier";
import { RegisterComponent } from './register/register.component';
import { AgmCoreModule } from "@agm/core";
import { HttpClientModule } from "@angular/common/http";
import { UserOverviewComponent } from './user-overview/user-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    FooterNavComponent,
    ChooseCategoryComponent,
    SearchFlightComponent,
    AllProductsComponent,
    FlightDetailComponent,
    LoginComponent,
    RegisterComponent,
    UserOverviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    CountdownTimerModule,
    FormsModule, 
    NotifierModule.withConfig({
    }),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAYJKB8Y7KNzbv6NN7ERl8nHfTJ1UtS4RI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
