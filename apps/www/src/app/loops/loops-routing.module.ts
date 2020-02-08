import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoopListComponent } from './components/loop-list/loop-list.component';

const routes: Routes = [
  {
    path: '',
    component: LoopListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoopsRoutingModule { }
