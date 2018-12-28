import { Component, OnInit } from '@angular/core';
import { UserListModel } from 'src/app/models/UserListModel';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  items: Array<UserListModel>;
  id: any;

  constructor(private userService: UserService,
    private spinnerService: Ng4LoadingSpinnerService, private generalService: UserService) { }

  ngOnInit() {
    this.getUserList();
  }

  removeUser(id: number) {

    Swal({
      title: 'Potvrdit smazani uzivatele s ID: ' + id,
      text: 'Operace je nevratna',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Ano, smazat',
      cancelButtonText: 'Nemazat'
    }).then((result) => {
      if (result.value) {

        this.spinnerService.show();
        console.log(JSON.stringify('smazani uzivatele s ID: ' + id));
        this.userService.removeUser(id).subscribe((data) => {
          console.log(data);
          this.ngOnInit();
          this.spinnerService.hide();
        },
          err => {
            console.log('Error occured while deleting the data.' + err);
          }

        );
        Swal(
          'Smazano!',
          'Zaznam smazan.',
          'success'
        );
      }
    });

  }

  getUserList() {
    this.spinnerService.show();
    this.userService.getUserList().subscribe(data => {
      this.items = data;
      // console.log('userList service response: ' + JSON.stringify(this.items));
      this.spinnerService.hide();
    });
  }

}
