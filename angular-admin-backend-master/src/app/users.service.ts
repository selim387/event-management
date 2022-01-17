import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {
  }

  getAllUsers(): Observable<any[]> {
    return this.httpClient.get<any>('http://localhost:3636/api/users');
  }

  deleteUser(userId): Observable<any> {
    return this.httpClient.delete<{ message?: string, status: string }>(`http://localhost:3636/api/users/delete/${userId}`)
      .pipe(
        switchMap(async (data) => {
          const list = await this.getAllUsers().toPromise();
          return {
            ...data,
            ...list
          };
        })
      );
  }
}
