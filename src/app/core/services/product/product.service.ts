import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/core/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Product[]>(`${environment.url_api}`);
  }
   createProduct(product: Product): Observable<Object> {
    return this.http.post(`${environment.url_api}` + `/create`, product);
  }
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${environment.url_api}/${id}`, { responseType: 'text' });
  }
z
}
