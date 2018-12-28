import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { RepairList } from 'src/app/models/RepairList';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-repairs',
  templateUrl: './user-repairs.component.html',
  styleUrls: ['./user-repairs.component.css']
})
export class UserRepairsComponent implements OnInit {

  items: RepairList;
  id: any;

  constructor(private userService: UserService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const queryParams = this.activeRoute.snapshot.queryParams;
    const routeParams = this.activeRoute.snapshot.params;
    this.id = routeParams.id;
    this.getUserRepairs(routeParams.id);
    }

    getUserRepairs(id: number) {
      this.userService.getUserRepairs(this.id).subscribe(data => {
        this.items = data;
        console.log('Endpoint /userRepairs service response: ' + JSON.stringify(this.items));
      });
    }

}
