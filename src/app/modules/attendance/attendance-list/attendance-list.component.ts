import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { manualattendList } from 'src/app/shared/models/master';
import { AttendanceService } from '../attendance-service/attendance.service';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.scss']
})
export class AttendanceListComponent {
  showTabs: boolean = false;
  showTabs1: boolean = false;
  showTabs3: boolean = false;

  manualattendanceMap: Map<string, any> = new Map<string, any>();
  manualattendanceArray : any[]= [];
  manualattendList: manualattendList[] = [];

  // Convert Map to an array of key-value pairs
  myMapEntries() {
    this.manualattendanceArray = Array.from(this.manualattendanceMap.entries());
 }

  constructor(private manualAttendance: AttendanceService) {  }

  toggleTabs() {
    this.showTabs = !this.showTabs;
  }
  toggleTabs1() {
    this.showTabs1 = !this.showTabs1;
  }
  toggleTabs3() {
    this.showTabs3 = !this.showTabs3;
  }


  addDepartment() {
    this.showTabs = false;
  }
  preventClose(event: MouseEvent) {
    event.stopPropagation();
  }

  departmrntForm!: FormGroup



  list1 = [
    { date: '01' },
    { date: '02', },
    {
      date: '03',
    },
    {
      date: '04',
    },
    {
      date: '05',
    },
    {
      date: '06',
    },
    {
      date: '07',
    },
    {
      date: '08',
    },
    {
      date: '09',
    },
    {
      date: '10',
    },
    {
      date: '11',
    },
    {
      date: '12',
    },
    {
      date: '13',
    },
    {
      date: '14',
    },
    {
      date: '15',
    },
    {
      date: '16',
    },
    {
      date: '17',
    },
    {
      date: '18',
    },
    {
      date: '19',
    },
    {
      date: '20',
    },
    {
      date: '21',
    },
    // {
    //   date: '22',
    // },
    // {
    //   date: '23',
    // },
    // {
    //   date: '24',
    // },
    // {
    //   date: '25',
    //  },
    // {
    //   date: '26',
    // },
    // {
    //   date: '27',
    // },
    // {
    //   date: '28',
    // },
    // {
    //   date: '29',
    // },
    // {
    //   date: '30',
    // },

  ];

  listPresent = [
    {
      id: '1',
      Attendance: 'P',

    },
  ];

  listAbusent = [
    {
      id: '1',
      Attendance: 'A',

    },
  ];

  listHoliday = [
    {
      id: '1',
      Attendance: 'H',
    },
  ];

  leaveHeading = [
    {
      Total: 'Total Leaves',
      Used: 'Used Leves',
      Saved: 'Saves Leaves',
      Actions: 'Actions',
    }
  ];
  Leavelist = [
    {
      totalLeave: '25',
      usedLeave: '12',
      saveLeave: '13',
    }
  ];

  ngOnInit() {
    this.getManualAttendanceList();

  }

  filterByDate(date:Date, empName: string){
   let attendanceArray = this.manualattendanceMap[empName]
    let filterattedance = attendanceArray.filter(function (attendance){
      return attendance.date == date;
 
    })
    console.log(filterattedance);
  }

  generateAttendanceMap() {
    this.manualattendList.forEach(listItem => {
      const key = listItem.createdBy;
      if (!this.manualattendanceMap.has(key)) {
        this.manualattendanceMap.set(key, []);
      }
      this.manualattendanceMap.get(key).push(listItem);
    });
    console.log(this.manualattendanceMap);
    this.myMapEntries();

    const exampleKey = "Ganesh";
    console.log("Attendance for 'Ganesh':", this.manualattendanceMap.get(exampleKey));
    const exampleDate = new Date("2024-04-17T00:00:00");
    this.filterByDate(exampleDate, exampleKey);
    console.log(this.manualattendanceArray)
  }

  getManualAttendanceList() {
    this.manualAttendance.getManualAttendanceWithId().subscribe(res => {
      this.manualattendList = res;
      console.log(this.manualattendList);
    this.generateAttendanceMap();
    });
  }
}
