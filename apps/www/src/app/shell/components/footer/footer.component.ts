import { Component } from '@angular/core';

@Component({
  selector: 'glp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
})
export class FooterComponent {
  public year = `${new Date().getFullYear()}`;
}
