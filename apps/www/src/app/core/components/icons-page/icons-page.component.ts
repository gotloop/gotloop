import { Component, OnInit } from '@angular/core';

import { IconCode } from '../../../shell/components/icon/icon-code.enum';
import { IconComponent } from '../../../shell/components/icon/icon.component';


@Component({
  selector: 'glp-icons-page',
  templateUrl: './icons-page.component.html',
  styleUrls: ['./icons-page.component.scss'],
  standalone: true,
  imports: [IconComponent],
})
export class IconsPageComponent implements OnInit {
  icons!: IconCode;

  iconKeys: string[] = [];

  ngOnInit() {
    this.iconKeys = Object.keys(IconCode);
    /*.map(key => {
      console.log(key);
      return IconCode[key];
    });*/
  }
}
