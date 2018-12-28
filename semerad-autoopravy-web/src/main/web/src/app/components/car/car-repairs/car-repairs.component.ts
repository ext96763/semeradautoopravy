import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { RepairList } from 'src/app/models/RepairList';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-repairs',
  templateUrl: './car-repairs.component.html',
  styleUrls: ['./car-repairs.component.css']
})
export class CarRepairsComponent implements OnInit {

  items: RepairList;
  id: any;

  constructor(private carService: CarService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const queryParams = this.activeRoute.snapshot.queryParams;
    const routeParams = this.activeRoute.snapshot.params;
    this.id = routeParams.id;
    this.getCarRepairs(routeParams.id);
    }

    getCarRepairs(id: number) {
      this.carService.getCarRepairs(this.id).subscribe(data => {
        this.items = data;
        console.log('Endpoint /carRepairs service response: ' + JSON.stringify(this.items));
      });
    }

}
