import { Component, OnInit } from '@angular/core';
import { CarList } from 'src/app/models/CarList';
import { CarListService } from '../car-list/car-list.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Array<CarList>;

  constructor(private carServ: CarListService) { }

  ngOnInit() {
    this.getCarList();
  }

  getCarList() {
    this.carServ.getCarList().subscribe(data => {
      this.cars = data;
      console.log('car service: Object' + this.cars);
      console.log(stringify(data));
    });
  }

}