import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { RouterModule } from '@angular/router';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ScrollEventModule } from 'ngx-scroll-event';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from './ui/material.module';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { CarListComponent } from './components/car/car-list/car-list.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { CarEditComponent } from './components/car/car-edit/car-edit.component';
import { GlobalErrorHandler } from './components/error/global-error-handler.service';
import { ErrorComponent } from './components/error/error.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { CarPartsComponent } from './components/car/car-parts/car-parts.component';
import { CarRepairsComponent } from './components/car/car-repairs/car-repairs.component';
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';
import { UserAddComponent } from './components/user/user-add/user-add.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { UserCarsComponent } from './components/user/user-cars/user-cars.component';
import { UserRepairsComponent } from './components/user/user-repairs/user-repairs.component';
import { UserPartsComponent } from './components/user/user-parts/user-parts.component';
import { RepairDetailComponent } from './components/repair/repair-detail/repair-detail.component';
import { RepairAddComponent } from './components/repair/repair-add/repair-add.component';
import { RepairEditComponent } from './components/repair/repair-edit/repair-edit.component';
import { RepairListComponent } from './components/repair/repair-list/repair-list.component';
import { RepairPartsComponent } from './components/repair/repair-parts/repair-parts.component';
import { PartListComponent } from './components/part/part-list/part-list.component';
import { PartAddComponent } from './components/part/part-add/part-add.component';
import { PartEditComponent } from './components/part/part-edit/part-edit.component';
import { PartDetailComponent } from './components/part/part-detail/part-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CarDetailComponent,
    CarListComponent,
    CarAddComponent,
    CarEditComponent,
    ErrorComponent,
    UserListComponent,
    CarPartsComponent,
    CarRepairsComponent,
    UserDetailComponent,
    UserAddComponent,
    UserEditComponent,
    UserCarsComponent,
    UserRepairsComponent,
    UserPartsComponent,
    RepairDetailComponent,
    RepairAddComponent,
    RepairEditComponent,
    RepairListComponent,
    RepairPartsComponent,
    PartListComponent,
    PartAddComponent,
    PartEditComponent,
    PartDetailComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    UiModule,
    ScrollEventModule,
    ProgressbarModule.forRoot(),
    HttpClientModule,
    AngularSvgIconModule,
    ReactiveFormsModule,
    FormsModule,
    CustomMaterialModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
