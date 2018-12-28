import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { PartService } from '../part.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Part } from 'src/app/models/Part';

@Component({
  selector: 'app-part-edit',
  templateUrl: './part-edit.component.html',
  styleUrls: ['./part-edit.component.css']
})
export class PartEditComponent implements OnInit {

  part: Part;
  editPartForm: FormGroup;
  id: any;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private partService: PartService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const queryParams = this.activeRoute.snapshot.queryParams;
    const routeParams = this.activeRoute.snapshot.params;
    this.id = routeParams.id;
    console.log('routeParams partEdit: ' + routeParams.id);

    this.editPartForm = this.formBuilder.group({
      partId: [],
      repairId: [],
      carId: [],
      partNumber: [],
      partDetail: [],
      repairDate: [],
      partUserId: []
    });

    this.partService.getPartById(routeParams.id)
      .subscribe(data => {
        console.log('Data readed to set editPartForm' + JSON.stringify(data));
        this.editPartForm.setValue(data);
      });

  }

  onSubmit() {
    this.partService.updatePart(this.editPartForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['parts']);
        },
        error => {
          console.log('Error while saving edited part: ' + JSON.stringify(error));
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
