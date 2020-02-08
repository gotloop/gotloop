import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { LoopPlayerComponent } from './components/loop-player/loop-player.component';
import { LoopCommentComponent } from './components/loop-comment/loop-comment.component';
import { LoopPlayerVizComponent } from './components/loop-player-viz/loop-player-viz.component';
import { LoopCommentsComponent } from './components/loop-comments/loop-comments.component';
import { LoopCommentFormComponent } from './components/loop-comment-form/loop-comment-form.component';

import { ShellModule } from '../shell/shell.module';
import * as fromLoop from './reducers/loop.reducer';
import { LoopEffects } from './effects/loop.effects';

@NgModule({
  declarations: [
    LoopPlayerComponent,
    LoopCommentComponent,
    LoopPlayerVizComponent,
    LoopCommentsComponent,
    LoopCommentFormComponent,
  ],
  exports: [LoopPlayerComponent],
  imports: [
    CommonModule,
    ShellModule,
    StoreModule.forFeature('loop', fromLoop.reducer),
    EffectsModule.forFeature([LoopEffects]),
  ],
})
export class LoopModule {}
