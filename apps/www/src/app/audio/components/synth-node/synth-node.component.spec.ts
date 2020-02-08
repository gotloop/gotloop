import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynthNodeComponent } from './synth-node.component';

describe('SynthNodeComponent', () => {
  let component: SynthNodeComponent;
  let fixture: ComponentFixture<SynthNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynthNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynthNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
