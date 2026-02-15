import { Component, Input } from '@angular/core';

@Component({
  selector: 'glp-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
  standalone: true,
})
export class IconComponent {
  @Input()
  public icon!: string;

  public iconCode!: string;
}
