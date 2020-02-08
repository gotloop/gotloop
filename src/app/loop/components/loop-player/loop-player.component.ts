import { Component, OnInit, Input } from '@angular/core';

import { LoopModel } from '@gotloop/lib';

@Component({
  selector: 'glp-loop-player',
  templateUrl: './loop-player.component.html',
  styleUrls: ['./loop-player.component.scss']
})
export class LoopPlayerComponent implements OnInit {

  @Input()
  public loop: LoopModel;

  constructor() { }

  ngOnInit() {
  }

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
