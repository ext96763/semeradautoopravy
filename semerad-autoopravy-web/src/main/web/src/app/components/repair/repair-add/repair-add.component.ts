import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RepairService } from '../repair.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-repair-add',
  templateUrl: './repair-add.component.html',
  styleUrls: ['./repair-add.component.css']
})
export class RepairAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private repairService: RepairService) { }

  addRepairForm: FormGroup;
  public partsArray: any[] = [];

  ngOnInit() {

    this.addRepairForm = this.formBuilder.group({
      repairId: [],
      carId: [],
      repairUserId: [],
      repairs: [],
      startOfRepair: [],
      endOfRepair: [],
      techCheck: [],
      oil: [],
      parts: [this.partsArray]
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

    this.repairService.createRepair(this.addRepairForm.value)
      .subscribe(data => {
        console.log('Component: ADD to service addRepairForm value: ' + JSON.stringify(this.addRepairForm.value));
        this.router.navigate(['repairs']);
      });
  }

}
