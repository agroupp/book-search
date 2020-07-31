import { Component, OnInit } from '@angular/core';
import { AuthService, BooksApiService } from '@services';

@Component({
  selector: 'sqr-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  userName = '';
  currentQuery = '';

  constructor(private auth: AuthService, private api: BooksApiService) { }

  ngOnInit(): void {
    this.userName = this.auth.userName;
  }

  search(query: string): void {
    this.currentQuery = query;
    console.log(query);
  }
}
