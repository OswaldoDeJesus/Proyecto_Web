import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  public getUsers(): Observable<any>{
    return this.http.get("http://192.168.120.205:5000/getUsers")
  }
  public auth(data:any):Observable<any>{
    return this.http.post("http://192.168.120.205:5000/logueo",data)
  }
}
