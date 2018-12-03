import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { CarListComponent } from './components/car/car-list/car-list.component';
import { CarAddComponent } from 'src/app/components/car/car-add/car-add.component';
import { CarEditComponent } from 'src/app/components/car/car-edit/car-edit.component';

const routes: Routes = [
  { path: 'info', component: CarDetailComponent },
  { path: 'news', component: CarDetailComponent },
  { path: 'customers', component: CarDetailComponent },
  { path: 'cars', component: CarListComponent },
  { path: 'repairs', component: CarDetailComponent },
  { path: 'parts', component: CarDetailComponent },
  { path: 'addUser', component: CarAddComponent },
  { path: 'addCar', component: CarAddComponent },
  { path: 'addRepair', component: CarAddComponent },
  { path: 'addPart', component: CarAddComponent },
  { path: 'carDetail/:id', component: CarDetailComponent },
  { path: 'carEdit/:id', component: CarEditComponent},
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
