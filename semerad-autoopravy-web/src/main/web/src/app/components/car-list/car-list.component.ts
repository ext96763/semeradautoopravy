import { Component, OnInit } from '@angular/core';
import { CarList } from 'src/app/models/CarList';
import { CarListService } from '../car-list/car-list.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  items: Array<CarList>;
  id: any;

  constructor(private carServ: CarListService) { }

  ngOnInit() {
    this.getCarList();
  }

  changeCar(id): void {
    console.log(JSON.stringify(id));
  }

  removeCar(id: number) {
    if (confirm('Potvrdit smazani auta s ID: ' + id)) {
      console.log(JSON.stringify('smazani auta s ID: ' + id));
      this.carServ.removeCar(id).subscribe((data) => {
        console.log(data);
        this.ngOnInit();
      }),
        err => {
          console.log('Error occured while deleting the data.' + err);
        }
    }
  }

  getCarList() {
    this.carServ.getCarList().subscribe(data => {
      this.items = data;
      console.log(JSON.stringify(data));
    });
  }

}
