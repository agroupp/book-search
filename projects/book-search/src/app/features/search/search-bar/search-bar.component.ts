import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tap, debounceTime, map, distinctUntilChanged } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sqr-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {
  private barSubscription!: Subscription;
  barControl = new FormControl('');
  @Output() private query = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    const q$ = this.barControl.valueChanges.pipe(
      debounceTime(700),
      map(value => this.clean(value)),
      distinctUntilChanged(),
      tap(value => this.query.emit(value))
    );
    this.barSubscription = q$.subscribe();
  }

  ngOnDestroy(): void {
    if (this.barSubscription) {
      this.barSubscription.unsubscribe();
    }
  }

  private clean(value: string): string {
    return value ? value.trim() : '';
  }
}
