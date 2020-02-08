import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopCommentFormComponent } from './loop-comment-form.component';

describe('LoopCommentFormComponent', () => {
  let component: LoopCommentFormComponent;
  let fixture: ComponentFixture<LoopCommentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoopCommentFormComponent ]
    })
    .compileComponents();
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
