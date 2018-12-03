import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CarModel } from 'src/app/models/CarModel';
import { HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { CarList } from 'src/app/models/CarList';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';

const APIEndpoint = environment.APIEndpoint;

@Injectable({
  providedIn: 'root'
})
export class CarService {

  CARS = APIEndpoint + '/cars';
  CAR_DETAIL = APIEndpoint + '/car?id=';
  CAR = APIEndpoint + '/car';
  CAR_REMOVE = APIEndpoint + '/car?id=';

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {
    this.getCarList();
  }

  // Create car
  createCar(car: CarModel) {
    console.log('vytvarim zaznam do DB z modelu: ' + JSON.stringify(car));
    return this.http.post(this.CAR, car);
  }

  // GET User Detail with all cars and repairs
  getCarDetail(id): Observable<CarModel> {
    console.log('Car Detail ID called from API: ' + this.CAR_DETAIL + id);
    return this.http.get<CarModel>(this.CAR_DETAIL + id);
  }

  // GET car by ID
  getCarById(id): Observable<CarModel> {
    console.log('Car by ID called from API: ' + this.CAR_DETAIL + id);
    return this.http.get<CarModel>(this.CAR_DETAIL + id);
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
  updateCar(id): Observable<CarModel[]> {
    console.log('Updating car from Service, ID: ' + this.CAR + id);
    return this.http.delete<CarModel[]>(this.CAR + id);
  }

}
