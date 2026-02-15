import { Component } from '@angular/core';
import { ContentPageComponent } from '../../../shell/components/content-page/content-page.component';

@Component({
  selector: 'glp-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css'],
  standalone: true,
  imports: [ContentPageComponent],
})
export class ErrorPageComponent {
  /**
   * Displayed error.
   */
  public error?: Error;
}
