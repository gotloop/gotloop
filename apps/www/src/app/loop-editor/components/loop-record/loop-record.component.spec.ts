import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoopRecordComponent } from './loop-record.component';
describe('LoopRecordComponent', () => {
  let component: LoopRecordComponent;
  let fixture: ComponentFixture<LoopRecordComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [LoopRecordComponent],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
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
