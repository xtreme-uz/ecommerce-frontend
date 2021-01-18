import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private PRODUCT_URL: string = environment.API_URL + '/products';

  constructor(private http: HttpClient) { }

  public getProducts(): any {
    return this.http.get<Product[]>(this.PRODUCT_URL);
  }

  public getProduct(id: number): any {
    return this.http.get(`${this.PRODUCT_URL}/${id}`);
  }

  public createProduct(product: Product): any {
    return this.http.post(this.PRODUCT_URL, product);
  }

  public updateProduct(product: Product): any {
    return this.http.put(`${this.PRODUCT_URL}/${product._id}`, product);
  }

  public deleteProduct(id: number): any {
    return this.http.delete(`${this.PRODUCT_URL}/${id}`);
  }

}
