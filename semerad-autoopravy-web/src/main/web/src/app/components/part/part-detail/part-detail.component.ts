import { Component, OnInit } from '@angular/core';
import { PartService } from '../part.service';
import { Part } from 'src/app/models/Part';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-part-detail',
  templateUrl: './part-detail.component.html',
  styleUrls: ['./part-detail.component.css']
})
export class PartDetailComponent implements OnInit {

  items: Part;
  id: any;

  constructor(private partService: PartService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const queryParams = this.activeRoute.snapshot.queryParams;
    const routeParams = this.activeRoute.snapshot.params;
    this.id = routeParams.id;
    this.getPartDetail(routeParams.id);
    }

    getPartDetail(id: number) {
      this.partService.getPartDetail(this.id).subscribe(data => {
        this.items = data;
        console.log('partDetail service response: ' + JSON.stringify(this.items));
      });
    }

}
