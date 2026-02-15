import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoopListComponent } from './loop-list.component';
import { LoopsLoaderComponent } from '../loops-loader/loops-loader.component';
describe('LoopListComponent', () => {
  let component: LoopListComponent;
  let fixture: ComponentFixture<LoopListComponent>;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [LoopListComponent, LoopsLoaderComponent],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(LoopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
