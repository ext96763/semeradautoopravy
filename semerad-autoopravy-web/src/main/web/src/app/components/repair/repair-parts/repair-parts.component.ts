import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { RepairService } from '../repair.service';
import Swal from 'sweetalert2';
import { Part } from 'src/app/models/Part';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repair-parts',
  templateUrl: './repair-parts.component.html',
  styleUrls: ['./repair-parts.component.css']
})
export class RepairPartsComponent implements OnInit {

  items: Array<Part>;
  id: any;

  constructor(private repairService: RepairService, private activeRoute: ActivatedRoute,
    private spinnerService: Ng4LoadingSpinnerService, private generalService: RepairService) { }

  ngOnInit() {
    const queryParams = this.activeRoute.snapshot.queryParams;
    const routeParams = this.activeRoute.snapshot.params;
    this.id = routeParams.id;
    this.getPartList(routeParams.id);
  }

  getPartList(id: number) {
    this.spinnerService.show();
    this.repairService.getPartList(id).subscribe(data => {
      this.items = data;
      console.log('repairList service response: ' + JSON.stringify(this.items));
      this.spinnerService.hide();
    });
  }

}
