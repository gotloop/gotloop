import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoopDetailRoutingModule } from './loop-detail-routing.module';
import { LoopDetailComponent } from './components/loop-detail/loop-detail.component';

@NgModule({
  declarations: [LoopDetailComponent],
  imports: [
    CommonModule,
    LoopDetailRoutingModule
  ]
})
export class LoopDetailModule { }
