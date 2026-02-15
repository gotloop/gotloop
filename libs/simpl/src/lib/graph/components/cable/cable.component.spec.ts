import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CableComponent } from './cable.component';
describe('CableComponent', () => {
  let component: CableComponent;
  let fixture: ComponentFixture<CableComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CableComponent],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(CableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
