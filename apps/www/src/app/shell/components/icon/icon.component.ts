import { Component, OnInit, Input } from '@angular/core';
import { IconCode } from './icon-code.enum';

@Component({
  selector: 'glp-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input()
  public icon: string;

  public iconCode: string;

  constructor() { }

  ngOnInit() {
    this.iconCode = IconCode[this.icon];
  }

}
