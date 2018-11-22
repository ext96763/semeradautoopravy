import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';

const routes: Routes = [
  { path: 'info', component: CarDetailComponent },
  { path: 'news', component: CarDetailComponent },
  { path: 'customers', component: CarDetailComponent },
  { path: 'cars', component: CarDetailComponent },
  { path: 'repairs', component: CarDetailComponent },
  { path: 'parts', component: CarDetailComponent },
  { path: '#/', component: CarDetailComponent },
  { path: '', component: CarDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
