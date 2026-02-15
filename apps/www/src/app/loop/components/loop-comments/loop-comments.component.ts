import { Component, Input } from '@angular/core';
import { CommentModel } from '@gotloop/api-model';
import { LoopCommentComponent } from '../loop-comment/loop-comment.component';


@Component({
  selector: 'glp-loop-comments',
  templateUrl: './loop-comments.component.html',
  styleUrls: ['./loop-comments.component.scss'],
  standalone: true,
  imports: [LoopCommentComponent],
})
export class LoopCommentsComponent {
  @Input()
  comments?: CommentModel[] = [];
}
