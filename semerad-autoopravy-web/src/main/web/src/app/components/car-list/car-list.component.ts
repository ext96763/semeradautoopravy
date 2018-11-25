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

  items: Array<CarList>;

  constructor(private carServ: CarListService) { }

  ngOnInit() {
    this.getCarList();
  }

  getCarList() {
    this.carServ.getCarList().subscribe(data => {
      this.items = data;
      console.log(JSON.stringify(data));
    });
  }

}
