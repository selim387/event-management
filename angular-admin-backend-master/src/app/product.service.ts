import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }
  UpdateProduct(id, data ): Observable<any[]> {

    return this.httpClient.put<any>(  'http://localhost:3636/api/products/' + id , data);
  }
  getAllProducts(): Observable<any[]> {
    return this.httpClient.get<any>('http://localhost:3636/api/products');
  }
  getSingleProduct(id): Observable<any[]> {
    return this.httpClient.get<any>(  'http://localhost:3636/api/products/' + id );
  }
  AddProduct(data): Observable<any[]>{

    return this.httpClient.post<any>('http://localhost:3636/api/products',data);
  }
  deleteProduct(productId): Observable<any> {
    return this.httpClient.delete<{ message?: string, status: string }>(`http://localhost:3636/api/products/delete/${productId}`)
      .pipe(
        switchMap(async (data) => {
          const prods = await this.getAllProducts().toPromise();
          return {
            ...data,
            ...prods
          };
        })
      );
  }
}
