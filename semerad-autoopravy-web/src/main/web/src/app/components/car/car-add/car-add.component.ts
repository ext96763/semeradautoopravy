import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarService } from '../car.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private carService: CarService) { }

  addCarForm: FormGroup;
  public repairsArray: any[] = [];

  ngOnInit() {

    this.addCarForm = this.formBuilder.group({
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
      repairs: [this.repairsArray]

      // lastName: ['', Validators.required]
    });

  }

  onSubmit() {
    Swal({
      position: 'center',
      type: 'success',
      title: 'Zaznam ulozen',
      showConfirmButton: false,
      timer: 1500
    });

    this.carService.createCar(this.addCarForm.value)
      .subscribe(data => {
        console.log('Component ADD to service addCarForm value: ' + this.addCarForm.value);
        this.router.navigate(['cars']);
      });
  }

}
