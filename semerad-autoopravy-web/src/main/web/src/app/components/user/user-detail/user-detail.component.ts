import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserModel } from 'src/app/models/UserModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  items: UserModel;
  id: any;

  constructor(private userService: UserService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const queryParams = this.activeRoute.snapshot.queryParams;
    const routeParams = this.activeRoute.snapshot.params;
    this.id = routeParams.id;
    this.getUserDetail(routeParams.id);
    }

    getUserDetail(id: number) {
      this.userService.getUserDetail(this.id).subscribe(data => {
        this.items = data;
        console.log('userDetail service response: ' + JSON.stringify(this.items));
      });
    }

}
