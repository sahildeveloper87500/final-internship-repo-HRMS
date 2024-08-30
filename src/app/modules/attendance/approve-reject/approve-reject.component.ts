import { Component } from '@angular/core';

@Component({
  selector: 'app-approve-reject',
  templateUrl: './approve-reject.component.html',
  styleUrls: ['./approve-reject.component.scss']
})
export class ApproveRejectComponent {
  parentSelector: boolean = false;
  iconActive: boolean = false;
button: boolean = true;
  color='white';

  updateColor(){
    if(this.parentSelector == true){
       this.color='white';
    }
    if(this.parentSelector == false){
    this.color='rgb(174, 174, 175)';
    }
   
  }



  toogleTag()
  {
    this.iconActive=!this.iconActive;
  }
attendance = [
  { id: 1, select: false, name: 'Vickey kr', supervisor: 'Niraj kr', pay_period: '8hr', Total_time: '8hr'},
  { id: 2, select: false, name: 'Satyam kr', supervisor: 'Niraj kr', pay_period: '8hr', Total_time: '8hr'},
  { id: 3, select: false, name: 'Rishav kr', supervisor: 'Niraj kr', pay_period: '8hr', Total_time: '8hr'},
  { id: 4, select: false, name: 'Saubhagya', supervisor: 'Niraj kr', pay_period: '8hr', Total_time: '8hr'},
];

onChangeAttendance($event) {
  const id = $event.target.value;
  const isChecked = $event.target.checked;
  

  this.attendance = this.attendance.map((d) => {
    if (d.id == id) {
      d.select = isChecked;
this.parentSelector= false;
      
      return d;
    }
    if (id == -1) {
      d.select = this.parentSelector;
      
      return d;
    }
   
     return d;
  });
}


showTabs = false;


toggleTabs() {
  this.showTabs = !this.showTabs;
}






addDepartment() {
    this.showTabs = false; 
}

preventClose(event: MouseEvent) {
    event.stopPropagation();
}
 
}
