import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditClassService {

  constructor(private http:HttpClient, private cookie:CookieService) { }
  url:string = "http://localhost:30/api/v1/admin/update-class"
  editClass(id:any,name:any,limit:any):Observable<any> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
       'Authorization': `Bearer ${this.cookie.get('accesss-token')}`,
      }),
      withCredentials: true,
      mode:'no-cros'
     };
     return this.http.patch(this.url,{id,name,limit},requestOptions)
  }
}
