import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { PartDirective } from '../../directives/part.directive';

@Component({
  template: `
    <glp-card>
      <glp-card-header>Header</glp-card-header>
      <glp-card-content>Content</glp-card-content>
      <glp-card-footer">Footer</glp-card-footer>
    </glp-card>
  `,
})
class CardTestComponent {}
describe('CardComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent, CardTestComponent, PartDirective],
    }).compileComponents();
  }));

  describe('Usage with templates', () => {
    let component: CardTestComponent;
    let fixture: ComponentFixture<CardTestComponent>;
    let debugElement: DebugElement;
    beforeEach(async(() => {
      fixture = TestBed.createComponent(CardTestComponent);
      component = fixture.componentInstance;
      debugElement = fixture.debugElement;
      fixture.detectChanges();
    }));

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have an header with "Header" text content', () => {
      const element = debugElement.query(By.css('header.card-header'));
      expect(element).toBeTruthy();
      expect(element.nativeElement.textContent).toContain('Header');
    });
    it('should have a main with "Content" text content', fakeAsync(() => {
      tick();
      const element = debugElement.query(By.css('.card-middle'));
      expect(element).toBeTruthy();
      expect(element.nativeElement.textContent).toContain('Content');
    }));
    it('should have a footer with "Footer" text content', () => {
      const element = debugElement.query(By.css('footer.card-footer'));
      expect(element).toBeTruthy();
      expect(element.nativeElement.textContent).toContain('Footer');
    });
  });
  describe('Basic usage', () => {
    let component: CardComponent;
    let fixture: ComponentFixture<CardComponent>;

    beforeEach(() => {
      fixture = TestBed.createComponent(CardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
