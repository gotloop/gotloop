import { Component } from '@angular/core';
import { CardContentComponent } from '../../../shell/components/card/card-content.component';
import { CardHeaderComponent } from '../../../shell/components/card/card-header.component';
import { CardComponent } from '../../../shell/components/card/card.component';
import { ContentPageComponent } from '../../../shell/components/content-page/content-page.component';

@Component({
  selector: 'glp-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  standalone: true,
  imports: [
    ContentPageComponent,
    CardComponent,
    CardHeaderComponent,
    CardContentComponent,
  ],
})
export class HomePageComponent {}
