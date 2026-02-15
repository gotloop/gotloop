import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoopModel, loopFactory } from '@gotloop/api-model';
import { LoopPlayerComponent } from './loop-player.component';
describe('LoopPlayerComponent', () => {
  let component: LoopPlayerComponent;
  let fixture: ComponentFixture<LoopPlayerComponent>;
  const loopInput: LoopModel = loopFactory();
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [LoopPlayerComponent],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(LoopPlayerComponent);
    component = fixture.componentInstance;
    component.loop = loopInput;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
