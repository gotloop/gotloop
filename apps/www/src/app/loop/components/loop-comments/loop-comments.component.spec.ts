import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoopCommentsComponent } from './loop-comments.component';
import { LoopCommentComponent } from '../loop-comment/loop-comment.component';
describe('LoopCommentsComponent', () => {
  let component: LoopCommentsComponent;
  let fixture: ComponentFixture<LoopCommentsComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [LoopCommentsComponent, LoopCommentComponent],
      teardown: { destroyAfterEach: false },
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
