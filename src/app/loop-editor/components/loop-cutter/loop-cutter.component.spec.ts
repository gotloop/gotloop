import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopCutterComponent } from './loop-cutter.component';

describe('LoopCutterComponent', () => {
  let component: LoopCutterComponent;
  let fixture: ComponentFixture<LoopCutterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoopCutterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopCutterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
