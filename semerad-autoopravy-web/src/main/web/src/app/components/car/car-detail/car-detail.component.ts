import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { CarModel } from 'src/app/models/CarModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  items: CarModel;
  id: any;

  constructor(private carService: CarService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const queryParams = this.activeRoute.snapshot.queryParams;
    const routeParams = this.activeRoute.snapshot.params;
    this.id = routeParams.id;
    this.getCarDetail(routeParams.id);
    }

    getCarDetail(id: number) {
      this.carService.getCarDetail(this.id).subscribe(data => {
        this.items = data;
        console.log('userDetail service response: ' + JSON.stringify(this.items));
      });
    }

}
