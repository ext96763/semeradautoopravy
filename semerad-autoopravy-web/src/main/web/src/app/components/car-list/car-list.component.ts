import { Component, OnInit } from '@angular/core';
import { CarList } from 'src/app/models/CarList';
import { CarListService } from './car-list.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  items: Array<CarList>;
  id: any;

  constructor(private carServ: CarListService,
    private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.getCarList();
  }

  changeCar(id): void {
    console.log(JSON.stringify(id));
  }

  removeCar(id: number) {
    if (confirm('Potvrdit smazani auta s ID: ' + id)) {
      this.spinnerService.show();
      console.log(JSON.stringify('smazani auta s ID: ' + id));
      this.carServ.removeCar(id).subscribe((data) => {
        console.log(data);
        this.ngOnInit();
        this.spinnerService.hide();
      }),
        err => {
          console.log('Error occured while deleting the data.' + err);
        };
    }
  }

  getCarList() {
    this.spinnerService.show();
    this.carServ.getCarList().subscribe(data => {
      this.items = data;
      console.log('carList service response: ' + JSON.stringify(this.items));
      this.spinnerService.hide();
    });
  }

}
