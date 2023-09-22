import { Observable } from "rxjs";
import { FormGroup } from "@angular/forms";

export interface IFormClass {
  onSave:()=> Observable<any>
  form:FormGroup
}

export interface IDialogData{
  component:any;
  formName: string
}

export interface IAddressDTO {
  street: string
  city: string;
  state:string;
  postalCode:string;
}

export interface IPersonalInfoDTO {
  firstName: string
  lastName:string;
  email:string
  phone:string
}
