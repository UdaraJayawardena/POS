import {Injectable} from '@angular/core';
import {Customer} from '../dto/customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  readonly baseUrl = environment.apiUrl + '/customers';

  constructor(private http: HttpClient) {
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl);
  }

  saveCustomer(customer: Customer): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl, customer);
  }

  // updateCustomer(customer: Customer): Observable<boolean> {
  //   return this.http.put<boolean>(this.baseUrl, customer);
  // }

  deleteCustomer(id: number): Observable<Customer[]> {
    return this.http.delete<Customer[]>(this.baseUrl + '?cusid=' + id);
  }

  searchCustomer(id: number): Observable<Customer[]> {
    console.log('search id : ' + id);
    return this.http.get<Customer[]>(this.baseUrl + '?cusSid=' + id);
  }

}
