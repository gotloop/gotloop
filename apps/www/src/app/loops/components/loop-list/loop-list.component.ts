import { Component, OnInit } from '@angular/core';
import { LoopsService } from '../../services/loops.service';
import { LoopsLoaderComponent } from '../loops-loader/loops-loader.component';
import { LoopPlayerComponent } from '../../../loop/components/loop-player/loop-player.component';

import { ContentPageComponent } from '../../../shell/components/content-page/content-page.component';
import { LoopModel } from '@gotloop/api-model';

@Component({
  selector: 'glp-loop-list',
  templateUrl: './loop-list.component.html',
  styleUrls: ['./loop-list.component.scss'],
  standalone: true,
  imports: [
    ContentPageComponent,
    LoopPlayerComponent,
    LoopsLoaderComponent
],
})
export class LoopListComponent implements OnInit {
  public loops?: LoopModel[];

  public isLoading = false;

  constructor(private loopsService: LoopsService) {}

  ngOnInit() {
    this.loopsService.loops$.subscribe((loops: LoopModel[]) => {
      this.loops = loops;
    });
  }
}
