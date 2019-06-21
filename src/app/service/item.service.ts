import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Item} from '../dto/item';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  readonly baseUrl = environment.apiUrl + '/items';

  constructor(private http: HttpClient) {
  }

  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.baseUrl);
  }

  saveItem(item: Item): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl, item);
  }


  updateItem(item: Item): Observable<boolean> {
    return this.http.put<boolean>(this.baseUrl, item);
  }

  deleteItem(code: number): Observable<Item[]> {
    return this.http.delete<Item[]>(this.baseUrl + '?code=' + code);
  }

  searchItem(code: number): Observable<Item[]> {
    console.log('search Code : ' + code);
    return this.http.get<Item[]>(this.baseUrl + '?code=' + code);
  }

}
