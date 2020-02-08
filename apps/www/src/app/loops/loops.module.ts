import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoopsRoutingModule } from './loops-routing.module';
import { LoopListComponent } from './components/loop-list/loop-list.component';
import { LoopsLoaderComponent } from './components/loops-loader/loops-loader.component';
import { LoopModule } from '../loop/loop.module';
import { LoopsService } from './services/loops.service';
import { ShellModule } from '../shell/shell.module';
import { StoreModule } from '@ngrx/store';
import * as fromLoops from './reducers/loops.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoopsEffects } from './effects/loops.effects';

@NgModule({
  declarations: [LoopListComponent, LoopsLoaderComponent],
  imports: [
    CommonModule,
    ShellModule,
    LoopModule,
    LoopsRoutingModule,
    StoreModule.forFeature('loops', fromLoops.reducer),
    EffectsModule.forFeature([LoopsEffects])
  ],
})
export class LoopsModule { }
