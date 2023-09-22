import { Component,Inject, OnInit,ComponentRef,OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { IDialogData } from '../intefaces';
import { ComponentPortal,CdkPortalOutletAttachedRef } from '@angular/cdk/portal';
import { IFormClass } from '../intefaces';

import {ReplaySubject} from 'rxjs'
import {takeUntil} from 'rxjs/operators'
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit,OnDestroy {
  destroy$ =new ReplaySubject<string>()
  portal!:ComponentPortal<any>
  formClass!:IFormClass;
  constructor(@Inject(MAT_DIALOG_DATA) public data:IDialogData,private dialogRef:MatDialogRef<ModalComponent>){}
  ngOnInit(): void {
      this.portal = new ComponentPortal(this.data.component)
  }
  onSave(){
    // u can just just use this.formClass.onSave().subscribe() but I shown method above for visible functionality
     this.formClass.onSave().pipe(takeUntil(this.destroy$)).subscribe((savedItem)=>{
      this.dialogRef.close(savedItem)
     })
  }
  recieveReference(ref:CdkPortalOutletAttachedRef){
      const compRef = ref as ComponentRef<IFormClass>;
      this.formClass = compRef.instance;
  }
  ngOnDestroy(): void {
    this.destroy$.next('')
      this.destroy$.complete()
  }


}
