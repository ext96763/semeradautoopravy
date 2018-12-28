import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PartService } from '../part.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-part-add',
  templateUrl: './part-add.component.html',
  styleUrls: ['./part-add.component.css']
})
export class PartAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private partService: PartService) { }

  addPartForm: FormGroup;

  ngOnInit() {

    this.addPartForm = this.formBuilder.group({
      partId: [],
      repairId: [],
      carId: [],
      partNumber: [],
      partDetail: [],
      repairDate: [],
      partUserId: []
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

    this.partService.createPart(this.addPartForm.value)
      .subscribe(data => {
        console.log('Component: ADD to service addPartForm value: ' + JSON.stringify(this.addPartForm.value));
        this.router.navigate(['parts']);
      });
  }

}
