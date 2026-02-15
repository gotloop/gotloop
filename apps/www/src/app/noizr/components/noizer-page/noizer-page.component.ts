import { Component } from '@angular/core';
import { IconComponent } from '../../../shell/components/icon/icon.component';

@Component({
  selector: 'glp-noizer-page',
  templateUrl: './noizer-page.component.html',
  styleUrls: ['./noizer-page.component.css'],
  standalone: true,
  imports: [IconComponent],
})
export class NoizerPageComponent {
  createSettings() {
    throw new Error('Method not implemented.');
  }

  openSettings() {
    throw new Error('Method not implemented.');
  }

  deleteSettings() {
    throw new Error('Method not implemented.');
  }

  handleAddSource() {
    throw new Error('Method not implemented.');
  }
}
