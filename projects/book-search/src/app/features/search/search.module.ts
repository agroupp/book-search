import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { SearchRoutingModule } from './search-routing.module';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
  declarations: [SearchPageComponent, SearchBarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
