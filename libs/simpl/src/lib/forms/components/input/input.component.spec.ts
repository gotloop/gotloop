import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent } from './input.component';
describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [InputComponent],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
