import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { CarList } from 'src/app/models/CarList';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';
import { environment } from 'src/environments/environment';
import { CarModel } from 'src/app/models/CarModel';

const APIEndpoint = environment.APIEndpoint;

@Injectable({
  providedIn: 'root'
})
export class CarListService {

  api_cars_list = APIEndpoint + '/cars';
  api_car_remove = APIEndpoint + '/car?id=';

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {
    this.getCarList();
  }

  // GET car list for easy FE navigation and looking for cars
  getCarList(): Observable<Array<CarList>> {
    return this.http.get<Array<CarList>>(this.api_cars_list);
  }

  // Remove car from DB
  removeCar(id): Observable<CarModel[]> {
    console.log(this.api_car_remove + id);
    return this.http.delete<CarModel[]>(this.api_car_remove + id);
  }

}
