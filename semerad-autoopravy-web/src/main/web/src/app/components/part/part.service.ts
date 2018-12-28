import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Part } from 'src/app/models/Part';
import { HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';

const APIEndpoint = environment.APIEndpoint;

@Injectable({
  providedIn: 'root'
})
export class PartService {

  PARTS = APIEndpoint + '/parts';
  PART_DETAIL = APIEndpoint + '/part/detail?id=';
  PART_BY_ID = APIEndpoint + '/part?id=';
  PART = APIEndpoint + '/part';
  PART_REMOVE = APIEndpoint + '/part?id=';

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  // Create part
  createPart(part: Part) {
    console.log('Vytvarim zaznam do DB z modelu: ' + JSON.stringify(part));
    return this.http.post(this.PART, part);
  }

  // GET part Detail
  getPartDetail(id): Observable<Part> {
    console.log('Part Detail ID called from API: ' + this.PART_DETAIL + id);
    return this.http.get<Part>(this.PART_DETAIL + id);
  }

  // GET part by ID
  getPartById(id): Observable<Part> {
    console.log('Part by ID called from API: ' + this.PART_BY_ID + id);
    return this.http.get<Part>(this.PART_BY_ID + id);
  }

  // GET part list
  getPartList(): Observable<Array<Part>> {
    console.log('PartList called from API');
    return this.http.get<Array<Part>>(this.PARTS);
  }

  // Remove part from DB
  removePart(id): Observable<Part[]> {
    console.log('Removing part: ' + this.PART_REMOVE + id);
    return this.http.delete<Part[]>(this.PART_REMOVE + id);
  }

  // Update part in DB
  updatePart(part: Part) {
    console.log('Updating part from Service to DB, ID: ' + this.PART + ' data:' + JSON.stringify(part));
    return this.http.put(this.PART, part);
  }

}
