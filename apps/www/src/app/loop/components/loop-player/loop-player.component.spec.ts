import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopModel, loopFactory } from '@gotloop/api-model';

import { LoopPlayerComponent } from './loop-player.component';
import { LoopCommentsComponent } from '../loop-comments/loop-comments.component';
import { LoopPlayerVizComponent } from '../loop-player-viz/loop-player-viz.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { LoopModule } from '../../loop.module';

describe('LoopPlayerComponent', () => {
  let component: LoopPlayerComponent;
  let fixture: ComponentFixture<LoopPlayerComponent>;

  const loopInput: LoopModel = loopFactory();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LoopModule],
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
