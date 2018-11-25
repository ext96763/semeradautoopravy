import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarListComponent } from '../app/components/car-list/car-list.component';

const routes: Routes = [
  { path: 'info', component: CarDetailComponent },
  { path: 'news', component: CarDetailComponent },
  { path: 'customers', component: CarDetailComponent },
  { path: 'cars', component: CarListComponent },
  { path: 'repairs', component: CarDetailComponent },
  { path: 'parts', component: CarDetailComponent },
  { path: 'carDetail', component: CarDetailComponent },
  { path: 'carEdit/:id', component: CarDetailComponent},
  { path: '#/', component: CarDetailComponent },
  { path: '', component: CarDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
