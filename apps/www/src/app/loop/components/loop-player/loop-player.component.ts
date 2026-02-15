import { Component, Input } from '@angular/core';

import { LoopModel } from '@gotloop/api-model';
import { CardFooterComponent } from '../../../shell/components/card/card-footer.component';
import { LoopCommentsComponent } from '../loop-comments/loop-comments.component';
import { CardContentComponent } from '../../../shell/components/card/card-content.component';
import { CardHeaderComponent } from '../../../shell/components/card/card-header.component';
import { CardComponent } from '../../../shell/components/card/card.component';

@Component({
  selector: 'glp-loop-player',
  templateUrl: './loop-player.component.html',
  styleUrls: ['./loop-player.component.css'],
  standalone: true,
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardContentComponent,
    LoopCommentsComponent,
    CardFooterComponent,
  ],
})
export class LoopPlayerComponent {
  @Input()
  public loop!: LoopModel;

  play() {
    // todo Webaudio play sample
  }

  pause() {
    // webaudio pause
  }

  like() {
    // todo call loopService.like()
  }

  comment() {
    // todo unfold comment form
  }
}
