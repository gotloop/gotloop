import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderSearchComponent } from './header-search.component';
import { FormsModule } from '@angular/forms';
describe('HeaderSearchComponent', () => {
  let component: HeaderSearchComponent;
  let fixture: ComponentFixture<HeaderSearchComponent>;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HeaderSearchComponent],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
