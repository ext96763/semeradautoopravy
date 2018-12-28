import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { RepairService } from '../repair.service';
import Swal from 'sweetalert2';
import { RepairList } from 'src/app/models/RepairList';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repair-list',
  templateUrl: './repair-list.component.html',
  styleUrls: ['./repair-list.component.css']
})
export class RepairListComponent implements OnInit {

  items: Array<RepairList>;
  id: any;

  constructor(private repairService: RepairService, private activeRoute: ActivatedRoute,
    private spinnerService: Ng4LoadingSpinnerService, private generalService: RepairService) { }

  ngOnInit() {
    const queryParams = this.activeRoute.snapshot.queryParams;
    const routeParams = this.activeRoute.snapshot.params;
    this.id = routeParams.id;
    this.getRepairList();
  }

  removeRepair(id: number) {

    Swal({
      title: 'Potvrdit smazani opravy s ID: ' + id,
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
        this.repairService.removeRepair(id).subscribe((data) => {
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

  getRepairList() {
    this.spinnerService.show();
    this.repairService.getRepairList().subscribe(data => {
      this.items = data;
      console.log('repairList service response: ' + JSON.stringify(this.items));
      this.spinnerService.hide();
    });
  }

}
