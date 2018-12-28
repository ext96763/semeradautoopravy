import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { UserModel } from 'src/app/models/UserModel';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  car: UserModel;
  editUserForm: FormGroup;
  id: any;
  public carsArray: any[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router,
    private userService: UserService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const queryParams = this.activeRoute.snapshot.queryParams;
    const routeParams = this.activeRoute.snapshot.params;
    this.id = routeParams.id;
    console.log('routeParams userEdit: ' + routeParams.id);

    this.editUserForm = this.formBuilder.group({
      userId: [],
      userName: [],
      userForeName: [],
      userRc: [],
      userDetail: [],
      userPhone: [],
      userEmail: [],
      exists: [],
      startDate: [],
      endDate: [],
      cars: [this.carsArray]
    });

    this.userService.getUserById(routeParams.id)
      .subscribe(data => {
        console.log('Data readed to set editForm' + JSON.stringify(data));
        this.editUserForm.setValue(data);
      });

  }

  onSubmit() {
    this.userService.updateCar(this.editUserForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['customers']);
        },
        error => {
          console.log('Error while saving edited user: ' + JSON.stringify(error));
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
