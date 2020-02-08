import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopRecordComponent } from './loop-record.component';

describe('LoopRecordComponent', () => {
  let component: LoopRecordComponent;
  let fixture: ComponentFixture<LoopRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoopRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
