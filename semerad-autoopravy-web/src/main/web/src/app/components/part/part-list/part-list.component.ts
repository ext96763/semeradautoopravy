import { Component, OnInit } from '@angular/core';
import { Part } from 'src/app/models/Part';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { PartService } from '../part.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-part-list',
  templateUrl: './part-list.component.html',
  styleUrls: ['./part-list.component.css']
})
export class PartListComponent implements OnInit {

  items: Array<Part>;
  id: any;

  constructor(private partService: PartService,
    private spinnerService: Ng4LoadingSpinnerService, private generalService: PartService) { }

  ngOnInit() {
    this.getPartList();
  }

  removePart(id: number) {

    Swal({
      title: 'Potvrdit smazani uzivatele s ID: ' + id,
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
        console.log(JSON.stringify('smazani uzivatele s ID: ' + id));
        this.partService.removePart(id).subscribe((data) => {
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

  getPartList() {
    this.spinnerService.show();
    this.partService.getPartList().subscribe(data => {
      this.items = data;
      // console.log('userList service response: ' + JSON.stringify(this.items));
      this.spinnerService.hide();
    });
  }

}
