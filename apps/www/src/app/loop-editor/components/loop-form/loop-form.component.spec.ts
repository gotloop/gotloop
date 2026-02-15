import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoopFormComponent } from './loop-form.component';
describe('LoopFormComponent', () => {
  let component: LoopFormComponent;
  let fixture: ComponentFixture<LoopFormComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [LoopFormComponent],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
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
