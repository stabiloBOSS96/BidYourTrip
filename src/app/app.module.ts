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

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    FooterNavComponent,
    ChooseCategoryComponent,
    SearchFlightComponent,
    AllProductsComponent,
    FlightDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CountdownTimerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
