import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopEditorComponent } from './loop-editor.component';

describe('LoopEditorComponent', () => {
  let component: LoopEditorComponent;
  let fixture: ComponentFixture<LoopEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoopEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
