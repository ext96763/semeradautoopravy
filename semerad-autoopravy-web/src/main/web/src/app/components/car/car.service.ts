import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CarModel } from 'src/app/models/CarModel';
import { HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { CarList } from 'src/app/models/CarList';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';
import { SparePartModel } from 'src/app/models/SparePartModel';
import { RepairList } from 'src/app/models/RepairList';

const APIEndpoint = environment.APIEndpoint;

@Injectable({
  providedIn: 'root'
})
export class CarService {

  CARS = APIEndpoint + '/cars';
  CAR_DETAIL = APIEndpoint + '/car/detail?id=';
  CAR_BY_ID = APIEndpoint + '/car?id=';
  CAR = APIEndpoint + '/car';
  CAR_REMOVE = APIEndpoint + '/car?id=';
  CAR_PARTS = APIEndpoint + '/carParts?id=';
  CAR_REPAIRS = APIEndpoint + '/carRepairs?id=';

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  // Create car
  createCar(car: CarModel) {
    console.log('vytvarim zaznam do DB z modelu: ' + JSON.stringify(car));
    return this.http.post(this.CAR, car);
  }

  // GET car detail with all repairs and parts
  getCarDetail(id): Observable<CarModel> {
    console.log('Car Detail ID called from API: ' + this.CAR_DETAIL + id);
    return this.http.get<CarModel>(this.CAR_DETAIL + id);
  }

  // GET car by ID
  getCarById(id): Observable<CarModel> {
    console.log('Car by ID called from API: ' + this.CAR_BY_ID + id);
    return this.http.get<CarModel>(this.CAR_BY_ID + id);
  }

  // GET car list for easy FE navigation and looking for cars
  getCarList(): Observable<Array<CarList>> {
    console.log('CarList called from API');
    return this.http.get<Array<CarList>>(this.CARS);
  }

  // Remove car from DB
  removeCar(id): Observable<CarModel[]> {
    console.log('Removing car: ' + this.CAR_REMOVE + id);
    return this.http.delete<CarModel[]>(this.CAR_REMOVE + id);
  }

  // Update car in DB
  updateCar(car: CarModel) {
    console.log('Updating car from Service to DB, ID: ' + this.CAR + ' data:' + JSON.stringify(car));
    return this.http.put(this.CAR, car);
  }

  // GET car parts for current car
  getCarParts(id): Observable<SparePartModel> {
    console.log('Endpoint getCarParts called from API for carID: ' + this.CAR_PARTS + id);
    return this.http.get<SparePartModel>(this.CAR_PARTS + id);
  }

  // GET car repairs for current car
  getCarRepairs(id): Observable<RepairList> {
    console.log('Endpoint /carRepairs called from API for carID: ' + this.CAR_REPAIRS + id);
    return this.http.get<RepairList>(this.CAR_REPAIRS + id);
  }

}
