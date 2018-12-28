import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { SparePartModel } from 'src/app/models/SparePartModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-parts',
  templateUrl: './user-parts.component.html',
  styleUrls: ['./user-parts.component.css']
})
export class UserPartsComponent implements OnInit {

  items: SparePartModel;
  id: any;

  constructor(private userService: UserService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const queryParams = this.activeRoute.snapshot.queryParams;
    const routeParams = this.activeRoute.snapshot.params;
    this.id = routeParams.id;
    this.getUserParts(routeParams.id);
    }

    getUserParts(id: number) {
      this.userService.getUserParts(this.id).subscribe(data => {
        this.items = data;
        console.log('Endpoint /userParts service response: ' + JSON.stringify(this.items));
      });
    }

}
