import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  addUserForm: FormGroup;
  public carsArray: any[] = [];

  ngOnInit() {

    this.addUserForm = this.formBuilder.group({
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

  }

  onSubmit() {
    Swal({
      position: 'center',
      type: 'success',
      title: 'Zaznam ulozen',
      showConfirmButton: false,
      timer: 1500
    });

    this.userService.createUser(this.addUserForm.value)
      .subscribe(data => {
        console.log('Component: ADD to service addUserForm value: ' + JSON.stringify(this.addUserForm.value));
        this.router.navigate(['customers']);
      });
  }

}
