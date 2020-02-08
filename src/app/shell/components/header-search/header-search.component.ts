import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'glp-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss']
})
export class HeaderSearchComponent implements OnInit {

  /** text seached by the user */
  public searchText: string;

  constructor() { }

  ngOnInit() {
  }

}
