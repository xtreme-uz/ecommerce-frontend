import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { QuantityUnit } from '../interfaces/QuantityUnit';

@Injectable({
  providedIn: 'root'
})
export class QuantityUnitService {

  private QUANTITY_UNIT_URL: string = environment.API_URL + '/quantity-units';

  constructor(private http: HttpClient) { }

  public getQuantityUnits(): any {
    return this.http.get<QuantityUnit[]>(this.QUANTITY_UNIT_URL);
  }
}
