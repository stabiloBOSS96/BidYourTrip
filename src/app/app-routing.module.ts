import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { FlightDetailComponent } from './flight-detail/flight-detail.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'product-overview',
    pathMatch: 'full'
  },
  {
    path: 'product-overview',
    component: AllProductsComponent
  },
  {
    path: 'flight-detail/:id',
    component: FlightDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
