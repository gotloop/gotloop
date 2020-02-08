import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'glp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
public year: string;
  constructor() { }

  ngOnInit() {
    this.year = `${(new Date()).getFullYear()}`;
  }

}
