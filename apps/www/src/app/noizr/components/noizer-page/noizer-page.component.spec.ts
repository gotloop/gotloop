import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoizerPageComponent } from './noizer-page.component';
describe('NoizerPageComponent', () => {
  let component: NoizerPageComponent;
  let fixture: ComponentFixture<NoizerPageComponent>;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [NoizerPageComponent],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(NoizerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
