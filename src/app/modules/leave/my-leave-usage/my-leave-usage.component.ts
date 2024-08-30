import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-my-leave-usage',
  templateUrl: './my-leave-usage.component.html',
  styleUrls: ['./my-leave-usage.component.scss']
})
export class MyLeaveUsageComponent {
 
  showTabs: boolean = false;
    
  toggleTabs() {
      this.showTabs = !this.showTabs; 
  }

  addDepartment() {
      this.showTabs = false; 
  }

  preventClose(event: MouseEvent) {
      event.stopPropagation(); 
  }

  departmrntForm!: FormGroup

  AttendanceEmployee =[ 
    {id:'1', date:'01 jan 2024', punch_in: '10 AM', punch_out: '5 PM', production: '6 hr', break: '1 hr',  overtime: '0 hr', netbalance:"300"},
    {id:'1', date:'01 jan 2024', punch_in: '10 AM', punch_out: '5 PM', production: '6 hr', break: '1 hr',  overtime: '0 hr', netbalance:"300"},
    {id:'1', date:'01 jan 2024', punch_in: '10 AM', punch_out: '5 PM', production: '6 hr', break: '1 hr',  overtime: '0 hr', netbalance:"300"},
    {id:'1', date:'01 jan 2024', punch_in: '10 AM', punch_out: '5 PM', production: '6 hr', break: '1 hr',  overtime: '0 hr', netbalance:"300"},{id:'1', date:'01 jan 2024', punch_in: '10 AM', punch_out: '5 PM', production: '6 hr', break: '1 hr',  overtime: '0 hr', netbalance:"300"},
    {id:'1', date:'01 jan 2024', punch_in: '10 AM', punch_out: '5 PM', production: '6 hr', break: '1 hr',  overtime: '0 hr', netbalance:"300"},{id:'1', date:'01 jan 2024', punch_in: '10 AM', punch_out: '5 PM', production: '6 hr', break: '1 hr',  overtime: '0 hr', netbalance:"300"},
    {id:'1', date:'01 jan 2024', punch_in: '10 AM', punch_out: '5 PM', production: '6 hr', break: '1 hr',  overtime: '0 hr', netbalance:"300"},
    {id:'1', date:'01 jan 2024', punch_in: '10 AM', punch_out: '5 PM', production: '6 hr', break: '1 hr',  overtime: '0 hr', netbalance:"300"},
    {id:'1', date:'01 jan 2024', punch_in: '10 AM', punch_out: '5 PM', production: '6 hr', break: '1 hr',  overtime: '0 hr', netbalance:"300"},
    {id:'1', date:'01 jan 2024', punch_in: '10 AM', punch_out: '5 PM', production: '6 hr', break: '1 hr',  overtime: '0 hr', netbalance:"300"},
    {id:'1', date:'01 jan 2024', punch_in: '10 AM', punch_out: '5 PM', production: '6 hr', break: '1 hr',  overtime: '0 hr', netbalance:"300"},{id:'1', date:'01 jan 2024', punch_in: '10 AM', punch_out: '5 PM', production: '6 hr', break: '1 hr',  overtime: '0 hr', netbalance:"300"},
    {id:'1', date:'01 jan 2024', punch_in: '10 AM', punch_out: '5 PM', production: '6 hr', break: '1 hr',  overtime: '0 hr', netbalance:"300"},{id:'1', date:'01 jan 2024', punch_in: '10 AM', punch_out: '5 PM', production: '6 hr', break: '1 hr',  overtime: '0 hr', netbalance:"300"},
    {id:'1', date:'01 jan 2024', punch_in: '10 AM', punch_out: '5 PM', production: '6 hr', break: '1 hr',  overtime: '0 hr', netbalance:"300"}, {id:'1', date:'01 jan 2024', punch_in: '10 AM', punch_out: '5 PM', production: '6 hr', break: '1 hr',  overtime: '0 hr', netbalance:"300"},
    {id:'1', date:'01 jan 2024', punch_in: '10 AM', punch_out: '5 PM', production: '6 hr', break: '1 hr',  overtime: '0 hr', netbalance:"300"},
    {id:'1', date:'01 jan 2024', punch_in: '10 AM', punch_out: '5 PM', production: '6 hr', break: '1 hr',  overtime: '0 hr', netbalance:"300"},
    {id:'1', date:'01 jan 2024', punch_in: '10 AM', punch_out: '5 PM', production: '6 hr', break: '1 hr',  overtime: '0 hr', netbalance:"300"},{id:'1', date:'01 jan 2024', punch_in: '10 AM', punch_out: '5 PM', production: '6 hr', break: '1 hr',  overtime: '0 hr', netbalance:"300"},
    {id:'1', date:'01 jan 2024', punch_in: '10 AM', punch_out: '5 PM', production: '6 hr', break: '1 hr',  overtime: '0 hr', netbalance:"300"},{id:'1', date:'01 jan 2024', punch_in: '10 AM', punch_out: '5 PM', production: '6 hr', break: '1 hr',  overtime: '0 hr', netbalance:"300"},
    {id:'1', date:'01 jan 2024', punch_in: '10 AM', punch_out: '5 PM', production: '6 hr', break: '1 hr',  overtime: '0 hr', netbalance:"300"},
];
}