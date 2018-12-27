import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { CarListComponent } from './components/car/car-list/car-list.component';
import { CarAddComponent } from 'src/app/components/car/car-add/car-add.component';
import { CarEditComponent } from 'src/app/components/car/car-edit/car-edit.component';
import { ErrorComponent } from 'src/app/components/error/error.component';

import { UserListComponent } from './components/user/user-list/user-list.component';

const routes: Routes = [
  { path: 'info', component: CarListComponent },
  { path: 'news', component: CarDetailComponent },
  { path: 'customers', component: UserListComponent },
  { path: 'cars', component: CarListComponent },
  { path: 'repairs', component: CarListComponent },
  { path: 'parts', component: CarListComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'addUser', component: CarAddComponent },
  { path: 'addCar', component: CarAddComponent },
  { path: 'addRepair', component: CarAddComponent },
  { path: 'addPart', component: CarAddComponent },
  { path: 'carDetail/:id', component: CarDetailComponent },
  { path: 'carEdit/:id', component: CarEditComponent},
  { path: 'repairs/:id', component: CarDetailComponent },
  { path: 'parts/:id', component: CarDetailComponent },
  { path: '#/', component: CarListComponent },
  { path: '', component: CarListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      // Enable route tracing in LOG only for dev purpose
      // { enableTracing: true }
      )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
