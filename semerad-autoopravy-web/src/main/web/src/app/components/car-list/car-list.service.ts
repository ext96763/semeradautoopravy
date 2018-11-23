import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { CarList } from 'src/app/models/CarList';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class CarListService {
  api_cars_list = 'https://semeradautoopravy.herokuapp.com/cars';

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {
    this.getCarList();
  }

  // GET car list for easy FE navigation and looking for cars
  getCarList(): Observable<Array<CarList>> {
    console.log('car service: Object' + CarList);
    console.log(stringify(CarList));
    return this.http.get<Array<CarList>>(this.api_cars_list);
  }

}
