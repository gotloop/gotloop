import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoopDetailComponent } from './loop-detail.component';
describe('LoopDetailComponent', () => {
  let component: LoopDetailComponent;
  let fixture: ComponentFixture<LoopDetailComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [LoopDetailComponent],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(LoopDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
