import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorComponent } from 'src/app/components/error/error.component';

import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { CarListComponent } from './components/car/car-list/car-list.component';
import { CarAddComponent } from 'src/app/components/car/car-add/car-add.component';
import { CarEditComponent } from 'src/app/components/car/car-edit/car-edit.component';
import { CarPartsComponent } from './components/car/car-parts/car-parts.component';
import { CarRepairsComponent } from './components/car/car-repairs/car-repairs.component';

import { UserDetailComponent } from './components/user/user-detail/user-detail.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserCarsComponent } from './components/user/user-cars/user-cars.component';
import { UserRepairsComponent } from './components/user/user-repairs/user-repairs.component';
import { UserPartsComponent } from './components/user/user-parts/user-parts.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { UserAddComponent } from './components/user/user-add/user-add.component';

const routes: Routes = [
  { path: 'info', component: CarListComponent },
  { path: 'news', component: CarDetailComponent },
  { path: 'customers', component: UserListComponent },
  { path: 'cars', component: CarListComponent },
  { path: 'repairs', component: CarListComponent },
  { path: 'parts', component: CarListComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'addUser', component: UserAddComponent },
  { path: 'addCar', component: CarAddComponent },
  { path: 'addRepair', component: CarAddComponent },
  { path: 'addPart', component: CarAddComponent },
  { path: 'userDetail/:id', component: UserDetailComponent },
  { path: 'userEdit/:id', component: UserEditComponent},
  { path: 'userCars/:id', component: UserCarsComponent },
  { path: 'userRepairs/:id', component: UserRepairsComponent },
  { path: 'userParts/:id', component: UserPartsComponent },
  { path: 'carDetail/:id', component: CarDetailComponent },
  { path: 'carParts/:id', component: CarPartsComponent },
  { path: 'carRepairs/:id', component: CarRepairsComponent },
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
