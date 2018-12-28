import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { RepairService } from '../repair.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { RepairModel } from 'src/app/models/RepairModel';

@Component({
  selector: 'app-repair-edit',
  templateUrl: './repair-edit.component.html',
  styleUrls: ['./repair-edit.component.css']
})
export class RepairEditComponent implements OnInit {

  repair: RepairModel;
  editRepairForm: FormGroup;
  id: any;
  public partsArray: any[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router,
    private repairService: RepairService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const queryParams = this.activeRoute.snapshot.queryParams;
    const routeParams = this.activeRoute.snapshot.params;
    this.id = routeParams.id;
    console.log('routeParams repairEdit: ' + routeParams.id);

      this.editRepairForm = this.formBuilder.group({
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

    this.repairService.getRepairById(routeParams.id)
      .subscribe(data => {
        console.log('Data readed to set editForm' + JSON.stringify(data));
        this.editRepairForm.setValue(data);
      });

  }

  onSubmit() {
    this.repairService.updateRepair(this.editRepairForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['repairs']);
        },
        error => {
          console.log('Error while saving edited repair: ' + JSON.stringify(error));
          Swal({
            type: 'error',
            title: 'Chyba! ' + error.status,
            text: 'Zprava: ' + error.message,
            footer: '<a>Zkuste ulozit znovu</a>'
          });
        });

    Swal({
      position: 'center',
      type: 'success',
      title: 'Zaznam ulozen',
      showConfirmButton: false,
      timer: 1500
    });
  }

}
