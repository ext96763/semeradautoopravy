import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { AddCarComponent } from './components/add-car/add-car.component';


@NgModule({
  declarations: [
    AppComponent,
    CarDetailComponent,
    CarListComponent,
    AddCarComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    UiModule,
    ScrollEventModule,
    ProgressbarModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CustomMaterialModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
