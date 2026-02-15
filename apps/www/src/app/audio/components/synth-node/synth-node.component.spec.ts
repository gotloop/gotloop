import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SynthNodeComponent } from './synth-node.component';
describe('SynthNodeComponent', () => {
  let component: SynthNodeComponent;
  let fixture: ComponentFixture<SynthNodeComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SynthNodeComponent],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
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
