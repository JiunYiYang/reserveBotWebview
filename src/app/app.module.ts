import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule, FormControlName, FormControlDirective, Form, NgForm, NgModel, Validators, FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { 
  MdPrefixRejector,
  MatButtonModule, 
  MatSelectModule,
  MatOptionModule,
  MatInputModule,
  MatInput,
  MatFormFieldModule,
  MatFormField,
  MatFormFieldControl,
  MatDatepickerModule,
  MatNativeDateModule,
  MatHint,
  MatListModule,
  CompatibilityModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    FlexLayoutModule,
    CompatibilityModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
