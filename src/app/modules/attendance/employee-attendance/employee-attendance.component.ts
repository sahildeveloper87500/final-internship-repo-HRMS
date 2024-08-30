import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-attendance',
  templateUrl: './employee-attendance.component.html',
  styleUrls: ['./employee-attendance.component.scss']
})
export class EmployeeAttendanceComponent {
  AttendanceEmployee =[ 
    {id:'1', date:'01 jan 2024', punch_in: '10 AM', punch_out: '5 PM', production: '6 hr', break: '1 hr',  overtime: '0 hr'},
    {id:'1', date:'01 jan 2024', punch_in: '10 AM', punch_out: '5 PM', production: '6 hr', break: '1 hr',  overtime:'0 hr'}
];
}
