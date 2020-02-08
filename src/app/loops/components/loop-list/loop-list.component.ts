import { Component, OnInit } from '@angular/core';
import { LoopsService } from '../../services/loops.service';

@Component({
  selector: 'glp-loop-list',
  templateUrl: './loop-list.component.html',
  styleUrls: ['./loop-list.component.scss']
})
export class LoopListComponent implements OnInit {

  public loops: any[];

  public isLoading: boolean;

  constructor(private loopsService: LoopsService) {

  }

  ngOnInit() {
    this.loopsService.loops$.subscribe((loops: any[]) => {
      this.loops = loops;
    });
  }

}
