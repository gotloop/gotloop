import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ErrorPageComponent } from './error-page.component';
import { ShellModule } from 'src/app/shell/shell.module';

describe('ErrorPageComponent', () => {
  let component: ErrorPageComponent;
  let fixture: ComponentFixture<ErrorPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    declarations: [ErrorPageComponent],
    imports: [ShellModule],
    teardown: { destroyAfterEach: false }
}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});