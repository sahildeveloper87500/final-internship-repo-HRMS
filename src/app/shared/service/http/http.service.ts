import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigurationService } from "./configuration.service";

@Injectable()
export class HttpService {
 
  // o bserve the full response
  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  //   withCredentials: true,
  //   observe: 'response' as 'response'
  // };

  constructor(private http: HttpClient, private _config: ConfigurationService) { }

  // public makePostReq(request: any, api: string): Observable<any> {
  //   return this.http.post<any>((this._config.ApiUrl + api), request, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true });
  // }

  public makePostReq(request: any, api: string): Observable<any> {
    return this.http.post<any>(this._config.ApiUrl + api, request, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });  //  did not use this withCredentials: true
  }

  public makeGetReq(api: string, params = {}): Observable<any> {
    return this.http.get((this._config.ApiUrl + api), { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), params: params});
  }

  public makePutReq(request: any, api: string): Observable<any> {
    return this.http.put<any>((this._config.ApiUrl + api), request, { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}); //  did not use this withCredentials: true
  }

  public makeDeleteReq(api: string): Observable<any> {
    return this.http.delete<any>((this._config.ApiUrl + api), { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true });
  }
  
  public makePatchReq(request: any, api :string){
      return this.http.patch((this._config.ApiUrl + api), request, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true })
  }

  public makePostDeleteReq(request: any, api: string): Observable<any> {
    return this.http.post<any>(this._config.ApiUrl + api, request, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: true });  //  did not use this withCredentials: true
  }
}