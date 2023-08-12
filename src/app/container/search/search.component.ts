import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText: String = '';
  constructor() { }

  ngOnInit(): void {
  }

  // updateSearchResult(event: any){
  //  this.searchText = event.target.value;
  // }
}
