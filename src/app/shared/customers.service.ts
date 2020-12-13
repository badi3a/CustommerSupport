import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Customer} from 'src/app/model/customers'

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http:HttpClient) { }

  url='http://localhost:3000/customers/';

  getCustomers(){
    return this.http.get<Customer[]>(this.url);
  }

  deleteCustomer(id){
    return this.http.delete(this.url+id);
  }

  getAllUser(){
    return this.http.get(this.url);
  }

  addCustomer(c:Customer){
    return this.http.post(this.url,c);
  }

  updateCustomer(c:Customer){
    return this.http.put(this.url + c.id , c)
  }

 getspec(id){
  return this.http.get<Customer[]>(this.url+id)
 } 
}





