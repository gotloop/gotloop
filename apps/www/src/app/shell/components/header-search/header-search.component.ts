import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'glp-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class HeaderSearchComponent {
  /** text seached by the user */
  public searchText = '';
}
