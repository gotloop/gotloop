import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopsLoaderComponent } from './loops-loader.component';

describe('LoopsLoaderComponent', () => {
  let component: LoopsLoaderComponent;
  let fixture: ComponentFixture<LoopsLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoopsLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopsLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
