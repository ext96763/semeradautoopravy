import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { AddCarComponent } from 'src/app/components/add-car/add-car.component';

const routes: Routes = [
  { path: 'info', component: CarDetailComponent },
  { path: 'news', component: CarDetailComponent },
  { path: 'customers', component: CarDetailComponent },
  { path: 'cars', component: CarListComponent },
  { path: 'repairs', component: CarDetailComponent },
  { path: 'parts', component: CarDetailComponent },
  { path: 'addUser', component: AddCarComponent },
  { path: 'addCar', component: AddCarComponent },
  { path: 'addRepair', component: AddCarComponent },
  { path: 'addPart', component: AddCarComponent },
  { path: 'carDetail/:id', component: CarDetailComponent },
  { path: 'carEdit/:id', component: CarDetailComponent},
  { path: 'repairs/:id', component: CarDetailComponent },
  { path: 'parts/:id', component: CarDetailComponent },
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
