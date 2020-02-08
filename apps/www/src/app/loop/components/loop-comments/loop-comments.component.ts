import { Component, OnInit, Input } from '@angular/core';
import { CommentModel } from '@gotloop/api-model';

@Component({
  selector: 'glp-loop-comments',
  templateUrl: './loop-comments.component.html',
  styleUrls: ['./loop-comments.component.scss']
})
export class LoopCommentsComponent implements OnInit {

  @Input()
  comments: CommentModel[] = [];

  constructor() { }

  ngOnInit() {
  }

}
