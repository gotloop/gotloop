import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularDraggableModule } from 'angular2-draggable';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { NoizerRoutingModule } from './noizr-routing.module';
import { BoxComponent } from './components/box/box.component';
import { CableComponent } from './components/cable/cable.component';
import { NoizerPageComponent } from './components/noizer-page/noizer-page.component';
import { ShellModule } from '../shell/shell.module';
import * as fromNoizr from './reducers/noizr.reducer';
import { NoizrEffects } from './effects/noizr.effects';

@NgModule({
  declarations: [BoxComponent, CableComponent, NoizerPageComponent],
  imports: [
    CommonModule,
    NoizerRoutingModule,
    ShellModule,
    AngularDraggableModule,
    StoreModule.forFeature('noizr', fromNoizr.reducer),
    EffectsModule.forFeature([NoizrEffects]),
  ],
  entryComponents: [NoizerPageComponent],
})
export class NoizerModule {}
