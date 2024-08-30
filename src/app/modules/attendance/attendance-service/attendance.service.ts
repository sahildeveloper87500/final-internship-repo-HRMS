import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ConfigurationService } from 'src/app/shared/service/http/configuration.service';
import { HttpService } from 'src/app/shared/service/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private httpService: HttpService, private configuration: ConfigurationService) { }

  ///////////////////////////Department/////////////////////////

  getManualAttendanceWithId(): Observable<any> {
    return this.httpService
      .makeGetReq(this.configuration.getManualAttendance)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  getListManualAttendance(): Observable<any> {
    return this.httpService
      .makeGetReq(this.configuration.getManualAttendance)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  saveManualAttendanceDetail(deptDetails: any): Observable<any> {
    debugger
    return this.httpService
      .makePostReq(deptDetails, this.configuration.getManualAttendance)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  editManualAttendanceDetail(deptDetails: any, id: string): Observable<any> {
    const x = this.configuration.getManualAttendance + "/" + id;
    return this.httpService.makePutReq(deptDetails, x);
  }
}
