import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistPageItemComponent } from './wishlist-page-item.component';

describe('WishlistPageItemComponent', () => {
  let component: WishlistPageItemComponent;
  let fixture: ComponentFixture<WishlistPageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistPageItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistPageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
