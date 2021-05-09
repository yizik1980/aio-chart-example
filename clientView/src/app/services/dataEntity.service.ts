import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { invoice } from '../model/invoice';

@Injectable({
  providedIn: 'root'
})
export class dataEntityService {

  constructor(private http: HttpClient) { }
  
  getData(): Observable<Array<invoice>> {
    return this.http.get<Array<invoice>>(environment.url);
  }

}
