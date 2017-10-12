import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule, FormControlName, FormControlDirective, Form, NgForm, NgModel, Validators, FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { Router, ActivatedRoute, Params, RouterModule } from '@angular/router';
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
import { Router, RouterModule } from '@angular/router';

import 'hammerjs';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { baseURL } from './shared/baseurl';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule, 
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
    AppRoutingModule
    // RouterModule
  ],
  providers: [
    {provide: 'BaseURL', useValue: baseURL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
