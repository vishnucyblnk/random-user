import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url:string = "https://dummyjson.com/users"

  constructor(private http:HttpClient ) { }

  DataDetails(user:number){
    console.log(`${this.base_url}/${user}`);
    return this.http.get(`${this.base_url}/${user}`)
  }
  


}
