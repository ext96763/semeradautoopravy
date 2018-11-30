import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { CarModel } from 'src/app/models/CarModel';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

const APIEndpoint = environment.APIEndpoint;

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  api_car_detail = APIEndpoint + '/car/detail?id=';

  headers = new HttpHeaders({'Content-Type': 'application/json'});

    constructor (private http: HttpClient) {
  }

  // GET User Detail with all cars and repairs
  getCarDetail(id): Observable<CarModel> {
    console.log('Car Detail ID called from API: ' + id);
    return this.http.get<CarModel>(this.api_car_detail + id);
  }

}
