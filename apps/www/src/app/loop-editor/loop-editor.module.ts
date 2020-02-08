import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { LoopCutterComponent } from './components/loop-cutter/loop-cutter.component';
import { LoopUploadComponent } from './components/loop-upload/loop-upload.component';
import { LoopRecordComponent } from './components/loop-record/loop-record.component';
import { LoopEditorComponent } from './components/loop-editor/loop-editor.component';
import { LoopFormComponent } from './components/loop-form/loop-form.component';
import { LoopEditorRoutingModule } from './loop-editor-routing.module';
import { LoopEditorEffects } from './effects/loop-editor.effects';
import * as fromLoopEditor from './reducers/loop-editor.reducer';

@NgModule({
  declarations: [LoopCutterComponent, LoopUploadComponent, LoopRecordComponent, LoopEditorComponent, LoopFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoopEditorRoutingModule,
    StoreModule.forFeature('loopEditor', fromLoopEditor.reducer),
    EffectsModule.forFeature([LoopEditorEffects])
  ]
})
export class LoopEditorModule { }
