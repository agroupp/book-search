import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { WishlistPageComponent } from './wishlist-page/wishlist-page.component';
import { WishlistPageItemComponent } from './wishlist-page-item/wishlist-page-item.component';


@NgModule({
  declarations: [WishlistPageComponent, WishlistPageItemComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    WishlistRoutingModule
  ]
})
export class WishlistModule { }
