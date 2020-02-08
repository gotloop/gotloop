import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopCommentsComponent } from './loop-comments.component';
import { LoopCommentComponent } from '../loop-comment/loop-comment.component';
import { CommentModel } from '@gotloop/api-model';

describe('LoopCommentsComponent', () => {
  let component: LoopCommentsComponent;
  let fixture: ComponentFixture<LoopCommentsComponent>;
  const comments: CommentModel[] = [];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoopCommentsComponent, LoopCommentComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
