import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TamilnaduDataService {

  constructor(private http:HttpClient) {}

  public getDistricts():Observable<any>{
    return this.http.get('http://localhost:8080/get');
  }

}
