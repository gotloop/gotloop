import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CommentModel } from '@gotloop/api-model';
import { LoopCommentComponent } from './loop-comment.component';
import { nanoid } from 'nanoid';
describe('LoopCommentComponent', () => {
  let component: LoopCommentComponent;
  let fixture: ComponentFixture<LoopCommentComponent>;
  const comment: CommentModel = {
    uuid: nanoid(),
    author: {
      name: 'test user',
      avatar: '1.png',
    },
    content: 'tralala pouet pouet',
    createdAt: new Date(Date.now()),
  };
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [LoopCommentComponent],
      teardown: { destroyAfterEach: false },
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
