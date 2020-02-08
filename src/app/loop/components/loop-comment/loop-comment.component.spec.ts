import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { v4 } from 'uuid';

import { LoopCommentComponent } from './loop-comment.component';
import { CommentModel } from '@gotloop/lib';
import { ObjectUnsubscribedError } from 'rxjs';

describe('LoopCommentComponent', () => {
  let component: LoopCommentComponent;
  let fixture: ComponentFixture<LoopCommentComponent>;
  const comment: CommentModel = {
    uuid: v4(),
    author: {
      name: 'test user',
      avatar: '1.png',
    },
    content: 'tralala pouet pouet',
    createdAt: new Date(Date.now()),
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoopCommentComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopCommentComponent);
    component = fixture.componentInstance;
    component.comment = comment;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
