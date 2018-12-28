import { Component, OnInit } from '@angular/core';
import { RepairService } from '../repair.service';
import { RepairModel } from 'src/app/models/RepairModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repair-detail',
  templateUrl: './repair-detail.component.html',
  styleUrls: ['./repair-detail.component.css']
})
export class RepairDetailComponent implements OnInit {

  items: RepairModel;
  id: any;

  constructor(private repairService: RepairService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const queryParams = this.activeRoute.snapshot.queryParams;
    const routeParams = this.activeRoute.snapshot.params;
    this.id = routeParams.id;
    this.getRepairDetail(routeParams.id);
    }

    getRepairDetail(id: number) {
      this.repairService.getRepairDetail(this.id).subscribe(data => {
        this.items = data;
        console.log('repairDetail service response: ' + JSON.stringify(this.items));
      });
    }

}
