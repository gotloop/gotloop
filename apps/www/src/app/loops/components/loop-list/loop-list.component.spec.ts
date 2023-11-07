import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoopListComponent } from './loop-list.component';
import { LoopModule } from 'src/app/loop/loop.module';
import { LoopPlayerComponent } from 'src/app/loop/components/loop-player/loop-player.component';
import { LoopsLoaderComponent } from '../loops-loader/loops-loader.component';
import { ShellModule } from 'src/app/shell/shell.module';

describe('LoopListComponent', () => {
  let component: LoopListComponent;
  let fixture: ComponentFixture<LoopListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    declarations: [LoopListComponent, LoopsLoaderComponent],
    imports: [LoopModule, ShellModule],
    teardown: { destroyAfterEach: false }
}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});