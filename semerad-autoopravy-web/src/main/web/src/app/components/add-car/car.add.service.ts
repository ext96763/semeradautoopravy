import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CarModel } from 'src/app/models/CarModel';

const APIEndpoint = environment.APIEndpoint;

@Injectable({
  providedIn: 'root'
})
export class CarService {

  api_car_add = APIEndpoint + '/car';

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  createUser(car: CarModel) {
    return this.http.post(this.api_car_add, car);
  }

}
