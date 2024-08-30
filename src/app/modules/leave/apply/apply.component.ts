import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
//import { ModalComponent } from '../modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent {
//   modalRef: MdbModalRef<ModalComponent> | null = null;

//   constructor(private modalService: MdbModalService) {}
//   openModal() {
//     this.modalRef = this.modalService.open(ModalComponent)
// }
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

  // constructor(public modalRef: MdbModalRef<ApplyComponent>) {}
}