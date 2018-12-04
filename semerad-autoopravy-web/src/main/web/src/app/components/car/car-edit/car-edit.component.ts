import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarModel } from 'src/app/models/CarModel';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import { CarService } from '../car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {

  car: CarModel;
  editForm: FormGroup;
  id: any;
  public repairsArray: any[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router,
     private carService: CarService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const queryParams = this.activeRoute.snapshot.queryParams;
    const routeParams = this.activeRoute.snapshot.params;
    this.id = routeParams.id;
    console.log('routeParams carEdit: ' + routeParams.id);

    this.editForm = this.formBuilder.group({
      carId: [],
      carUserId: [],
      win: [],
      spz: [],
      km: [],
      carInfo: [],
      startDateError: [],
      endDateError: [],
      featureRepairDate: [],
      doneWork: [],
      exist: [],
      buyedParts: [],
      repairs: []
    });

    this.carService.getCarById(routeParams.id)
      .subscribe( data => {
        console.log('Data to set to editForm' + JSON.stringify(data));
        this.editForm.setValue(data);
      });

    }

    onSubmit() {
      this.carService.updateCar(this.editForm.value)
        .pipe(first())
        .subscribe(
          data => {
            this.router.navigate(['cars']);
          },
          error => {
            alert(error);
          });
    }

}
