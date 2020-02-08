import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoopEditorComponent } from './components/loop-editor/loop-editor.component';

const routes: Routes = [
  {
    path: '',
    component: LoopEditorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoopEditorRoutingModule { }
