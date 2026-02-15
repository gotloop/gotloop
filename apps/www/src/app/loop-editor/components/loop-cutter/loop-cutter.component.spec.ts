import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoopCutterComponent } from './loop-cutter.component';
describe('LoopCutterComponent', () => {
  let component: LoopCutterComponent;
  let fixture: ComponentFixture<LoopCutterComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [LoopCutterComponent],
      teardown: { destroyAfterEach: false },
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
