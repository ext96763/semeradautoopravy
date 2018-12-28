import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CarList } from 'src/app/models/CarList';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-cars',
  templateUrl: './user-cars.component.html',
  styleUrls: ['./user-cars.component.css']
})
export class UserCarsComponent implements OnInit {

  items: CarList;
  id: any;

  constructor(private userService: UserService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const queryParams = this.activeRoute.snapshot.queryParams;
    const routeParams = this.activeRoute.snapshot.params;
    this.id = routeParams.id;
    this.getUserCars(routeParams.id);
    }

    getUserCars(id: number) {
      this.userService.getUserCars(this.id).subscribe(data => {
        this.items = data;
        console.log('Endpoint /userCars service response: ' + JSON.stringify(this.items));
      });
    }

}
