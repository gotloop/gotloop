import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconsPageComponent } from './icons-page.component';
describe('IconsPageComponent', () => {
  let component: IconsPageComponent;
  let fixture: ComponentFixture<IconsPageComponent>;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [IconsPageComponent],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(IconsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
