import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { RouterLink } from '@angular/router';
import { HeaderSearchComponent } from '../header-search/header-search.component';


@Component({
  selector: 'glp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [HeaderSearchComponent, RouterLink, IconComponent],
})
export class HeaderComponent {}
