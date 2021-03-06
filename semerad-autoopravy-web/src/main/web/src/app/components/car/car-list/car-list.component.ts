import { Component, OnInit } from '@angular/core';
import { CarList } from 'src/app/models/CarList';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { CarService } from '../car.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  items: Array<CarList>;
  id: any;

  constructor(private carService: CarService,
    private spinnerService: Ng4LoadingSpinnerService, private generalService: CarService) { }

  ngOnInit() {
    this.getCarList();
  }

  removeCar(id: number) {

    Swal({
      title: 'Potvrdit smazani auta s ID: ' + id,
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
        console.log(JSON.stringify('smazani auta s ID: ' + id));
        this.carService.removeCar(id).subscribe((data) => {
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

  getCarList() {
    this.spinnerService.show();
    this.carService.getCarList().subscribe(data => {
      this.items = data;
      // console.log('carList service response: ' + JSON.stringify(this.items));
      this.spinnerService.hide();
    });
  }

}
