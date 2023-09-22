import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { IDialogData ,IAddressDTO,IPersonalInfoDTO} from './intefaces';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import {Subject,tap,Observable} from 'rxjs'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-modal';
  address$!:Observable<IAddressDTO>
  personalInfo$!:Observable<IPersonalInfoDTO>



  constructor(private dialog:MatDialog){}

  addAdress(){
    const data:IDialogData = {
      component:Form1Component,
      formName:'Address'
    }
    const dialogRef = this.dialog.open(ModalComponent,{
        data,
    })
    this.address$ = dialogRef.afterClosed()


  }
  addPersonalInfo(){
    const data:IDialogData= {
      component: Form2Component,
      formName:'Personal Info'
    }
    const dialogRef = this.dialog.open(ModalComponent,{
      data
    })
   this.personalInfo$= dialogRef.afterClosed()

  }
}
