import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BatchIconComponent } from './batch-icon.component';
describe('BatchIconComponent', () => {
  let component: BatchIconComponent;
  let fixture: ComponentFixture<BatchIconComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BatchIconComponent],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(BatchIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
