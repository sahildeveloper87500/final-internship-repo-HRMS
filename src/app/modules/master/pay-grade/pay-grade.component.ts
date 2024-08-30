import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pay-grade',
  templateUrl: './pay-grade.component.html',
  styleUrls: ['./pay-grade.component.scss']
})
export class PayGradeComponent {

  [x: string]: any;
  manage: any;
  pay: any;
  grades() {
    throw new Error('Method not implemented.');
  }
  ManagePayGrades = [
    { name: 'Chief Executive Officers', money: 'IndianRupees,UnitedStateDollar,Euro,AustralianDollar,EgyptianPound,IraqiDinar,KuwaitiDinar,JapaneseYen', c: '', isSelected: false },
    { name: 'Executive', money: 'IndianRupees,UnitedStateDollar,Euro,AustralianDollar,EgyptianPound,IraqiDinar,KuwaitiDinar,JapaneseYen', c: '' },
    { name: 'G1', money: 'IndianRupees,UnitedStateDollar,Euro,AustralianDollar,EgyptianPound,IraqiDinar,KuwaitiDinar,JapaneseYen', c: '' },
    { name: 'G2', money: 'IndianRupees,UnitedStateDollar,Euro,AustralianDollar,EgyptianPound,IraqiDinar,KuwaitiDinar,JapaneseYen', c: '' },
    { name: 'G3', money: 'IndianRupees,UnitedStateDollar,Euro,AustralianDollar,EgyptianPound,IraqiDinar,KuwaitiDinar,JapaneseYen', c: '' },
    { name: 'G4', money: 'IndianRupees,UnitedStateDollar,Euro,AustralianDollar,EgyptianPound,IraqiDinar,KuwaitiDinar,JapaneseYen', c: '' },
    { name: 'G5', money: 'IndianRupees,UnitedStateDollar,Euro,AustralianDollar,EgyptianPound,IraqiDinar,KuwaitiDinar,JapaneseYen', c: '' },
    { name: 'Chief Executive Officers', money: 'IndianRupees,UnitedStateDollar,Euro,AustralianDollar,EgyptianPound,IraqiDinar,KuwaitiDinar,JapaneseYen', c: '', isSelected: false },
    { name: 'Executive', money: 'IndianRupees,UnitedStateDollar,Euro,AustralianDollar,EgyptianPound,IraqiDinar,KuwaitiDinar,JapaneseYen', c: '' },
    { name: 'G1', money: 'IndianRupees,UnitedStateDollar,Euro,AustralianDollar,EgyptianPound,IraqiDinar,KuwaitiDinar,JapaneseYen', c: '' },
    { name: 'G2', money: 'IndianRupees,UnitedStateDollar,Euro,AustralianDollar,EgyptianPound,IraqiDinar,KuwaitiDinar,JapaneseYen', c: '' },
    { name: 'G3', money: 'IndianRupees,UnitedStateDollar,Euro,AustralianDollar,EgyptianPound,IraqiDinar,KuwaitiDinar,JapaneseYen', c: '' },
    { name: 'G4', money: 'IndianRupees,UnitedStateDollar,Euro,AustralianDollar,EgyptianPound,IraqiDinar,KuwaitiDinar,JapaneseYen', c: '' },
    { name: 'G5', money: 'IndianRupees,UnitedStateDollar,Euro,AustralianDollar,EgyptianPound,IraqiDinar,KuwaitiDinar,JapaneseYen', c: '' },
    { name: 'Chief Executive Officers', money: 'IndianRupees,UnitedStateDollar,Euro,AustralianDollar,EgyptianPound,IraqiDinar,KuwaitiDinar,JapaneseYen', c: '', isSelected: false },
    { name: 'Executive', money: 'IndianRupees,UnitedStateDollar,Euro,AustralianDollar,EgyptianPound,IraqiDinar,KuwaitiDinar,JapaneseYen', c: '' },
    { name: 'G1', money: 'IndianRupees,UnitedStateDollar,Euro,AustralianDollar,EgyptianPound,IraqiDinar,KuwaitiDinar,JapaneseYen', c: '' },
    { name: 'G2', money: 'IndianRupees,UnitedStateDollar,Euro,AustralianDollar,EgyptianPound,IraqiDinar,KuwaitiDinar,JapaneseYen', c: '' },
    { name: 'G3', money: 'IndianRupees,UnitedStateDollar,Euro,AustralianDollar,EgyptianPound,IraqiDinar,KuwaitiDinar,JapaneseYen', c: '' },
    { name: 'G4', money: 'IndianRupees,UnitedStateDollar,Euro,AustralianDollar,EgyptianPound,IraqiDinar,KuwaitiDinar,JapaneseYen', c: '' },
    { name: 'G5', money: 'IndianRupees,UnitedStateDollar,Euro,AustralianDollar,EgyptianPound,IraqiDinar,KuwaitiDinar,JapaneseYen', c: '' },


  ]
  // In your component class
  selectAll: boolean = false;
  showTabs: boolean = false;
  departmrntForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.departmrntForm = this.fb.group({
      // Define your form controls here
    });
  }

  toggleSelectAll() {
    for (let m of this.ManagePayGrades) {
      m.isSelected = this.selectAll;
    }
  }

  toggleTabs() {
    this.showTabs = !this.showTabs;
  }

  AddManagePayGrades() {
    this.showTabs = false;
  }

  preventClose(event: MouseEvent) {
    event.stopPropagation();
  }
  // Inside your component class
  deleteManagePayGrade(index: number) {
    // Add any additional logic you need before deleting, if necessary
    this.ManagePayGrades.splice(index, 1); // Remove the element at the specified index
  }
}
