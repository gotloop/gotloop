import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoopEditorComponent } from './loop-editor.component';
describe('LoopEditorComponent', () => {
  let component: LoopEditorComponent;
  let fixture: ComponentFixture<LoopEditorComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [LoopEditorComponent],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(LoopEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
