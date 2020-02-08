import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'glp-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  /**
   * Displayed error.
   */
  public error: Error;

  constructor() { }

  ngOnInit() {
  }

}
