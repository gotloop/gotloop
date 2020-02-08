import { Component, OnInit } from '@angular/core';

import { IconCode } from 'src/app/shell/components/icon/icon-code.enum';

@Component({
  selector: 'glp-icons-page',
  templateUrl: './icons-page.component.html',
  styleUrls: ['./icons-page.component.scss'],
})
export class IconsPageComponent implements OnInit {
  icons: IconCode;

  iconKeys: string[] = [];

  constructor() {}

  ngOnInit() {
    this.iconKeys = Object.keys(IconCode);
    /*.map(key => {
      console.log(key);
      return IconCode[key];
    });*/
  }
}
