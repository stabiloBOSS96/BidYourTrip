import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { FlightDetailComponent } from './flight-detail/flight-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserOverviewComponent } from './user-overview/user-overview.component';


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
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
  ,
  {
    path: 'user-overview',
    component: UserOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
