import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // Import ReactiveFormsModule and FormsModule here
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {PortalModule} from '@angular/cdk/portal';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    Form1Component,
    Form2Component
  ],
  imports: [
    MatInputModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, // Make sure ReactiveFormsModule is imported here
    FormsModule, // Also import FormsModule if needed
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    PortalModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
