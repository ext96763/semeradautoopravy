import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarService } from './car.add.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private carService: CarService) { }

  addForm: FormGroup;
  public repairsArray: any[] = [];

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      carId: [],
      carUserId: [],
      carName: [],
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
    this.carService.createUser(this.addForm.value)
      .subscribe(data => {
        console.log('component to service: ' + this.addForm.value);
        this.router.navigate(['cars']);
      });
  }

}
