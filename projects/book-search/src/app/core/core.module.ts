import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { CoreRoutingModule } from './core-routing.module';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { SignInComponent } from './layout/sign-in/sign-in.component';


@NgModule({
  declarations: [MainLayoutComponent, SignInComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    CoreRoutingModule
  ],
  exports: [ MainLayoutComponent ]
})
export class CoreModule { }
