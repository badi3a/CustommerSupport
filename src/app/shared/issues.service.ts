import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Issues} from 'src/app/model/issues'

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  constructor(private http:HttpClient) { }

  url='http://localhost:5000/issues/';

  addIssues(i:Issues){
    return this.http.post(this.url,i);
  }

  getIssues(){
    return this.http.get<Issues[]>(this.url);
  }


}
