import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { SparePartModel } from 'src/app/models/SparePartModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-parts',
  templateUrl: './car-parts.component.html',
  styleUrls: ['./car-parts.component.css']
})
export class CarPartsComponent implements OnInit {

  items: SparePartModel;
  id: any;

  constructor(private carService: CarService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const queryParams = this.activeRoute.snapshot.queryParams;
    const routeParams = this.activeRoute.snapshot.params;
    this.id = routeParams.id;
    this.getCarParts(routeParams.id);
    }

    getCarParts(id: number) {
      this.carService.getCarParts(this.id).subscribe(data => {
        this.items = data;
        console.log('Endpoint /carParts service response: ' + JSON.stringify(this.items));
      });
    }

}
