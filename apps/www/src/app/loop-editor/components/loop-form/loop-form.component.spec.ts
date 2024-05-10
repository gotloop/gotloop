import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopFormComponent } from './loop-form.component';

describe('LoopFormComponent', () => {
  let component: LoopFormComponent;
  let fixture: ComponentFixture<LoopFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoopFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
