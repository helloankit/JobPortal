import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient:HttpClient) { }

  baseURL = 'https://jobs-api.squareboat.info/api/v1/';

  getHttp(endpoint:string){
    return this.httpClient.get(this.baseURL + endpoint);
  }

  getHttpWithQueryParams(endpoint:string, params:any){
    return this.httpClient.get(this.baseURL + endpoint, {params: params});
  }

  postHttp(endpoint:string, payload:any){
    return this.httpClient.post(this.baseURL + endpoint, payload);
  }

}
