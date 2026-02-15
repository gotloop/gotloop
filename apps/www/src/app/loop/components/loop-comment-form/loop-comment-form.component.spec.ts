import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoopCommentFormComponent } from './loop-comment-form.component';
describe('LoopCommentFormComponent', () => {
  let component: LoopCommentFormComponent;
  let fixture: ComponentFixture<LoopCommentFormComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [LoopCommentFormComponent],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(LoopCommentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
