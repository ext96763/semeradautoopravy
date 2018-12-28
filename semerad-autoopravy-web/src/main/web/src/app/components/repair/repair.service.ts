import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RepairModel } from 'src/app/models/RepairModel';
import { HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';
import { RepairList } from 'src/app/models/RepairList';
import { SparePartModel } from 'src/app/models/SparePartModel';
import { Part } from 'src/app/models/Part';

const APIEndpoint = environment.APIEndpoint;

@Injectable({
  providedIn: 'root'
})
export class RepairService {

  REPAIRS = APIEndpoint + '/repairs';
  REPAIR_DETAIL = APIEndpoint + '/repair/detail?id=';
  REPAIR_BY_ID = APIEndpoint + '/repair?id=';
  REPAIR = APIEndpoint + '/repair';
  REPAIR_REMOVE = APIEndpoint + '/repair?id=';
  USER_PARTS = APIEndpoint + '/userParts?id=';
  USER_CARS = APIEndpoint + '/userCars?id=';
  PARTS_BY_REPAIR_ID = APIEndpoint + '/partRepairs?id=';

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  // Create repair
  createRepair(repair: RepairModel) {
    console.log('Vytvarim zaznam do DB z modelu: ' + JSON.stringify(repair));
    return this.http.post(this.REPAIR, repair);
  }

  // GET Repair Detail with all cars and repairs
  getRepairDetail(id): Observable<RepairModel> {
    console.log('REPAIR Detail ID called from API: ' + this.REPAIR_DETAIL + id);
    return this.http.get<RepairModel>(this.REPAIR_DETAIL + id);
  }

  // GET repair by ID
  getRepairById(id): Observable<RepairModel> {
    console.log('Repair by ID called from API: ' + this.REPAIR_BY_ID + id);
    return this.http.get<RepairModel>(this.REPAIR_BY_ID + id);
  }

  // GET repair list for easy FE navigation and looking for users
  getRepairList(): Observable<Array<RepairList>> {
    console.log('RepairList called from API. Path: ' + this.REPAIRS);
    return this.http.get<Array<RepairList>>(this.REPAIRS);
  }

  // GET part list for particular repair
  getPartList(id): Observable<Array<Part>> {
    console.log('PartList called from API. Path: ' + this.PARTS_BY_REPAIR_ID + id);
    return this.http.get<Array<Part>>(this.PARTS_BY_REPAIR_ID + id);
  }

  // Remove repair from DB
  removeRepair(id): Observable<RepairModel[]> {
    console.log('Removing repair: ' + this.REPAIR_REMOVE + id);
    return this.http.delete<RepairModel[]>(this.REPAIR_REMOVE + id);
  }

  // Update repair in DB
  updateRepair(repair: RepairModel) {
    console.log('Updating repair from Service to DB, ID: ' + this.REPAIR + ' data:' + JSON.stringify(repair));
    return this.http.put(this.REPAIR, repair);
  }

}
