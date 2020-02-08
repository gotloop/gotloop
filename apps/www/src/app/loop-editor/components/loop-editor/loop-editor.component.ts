import { Component, OnInit } from '@angular/core';

export enum LoopEditorSteps {
  Import,
  Record,
  Upload,
  Details,
  Publish,
}
/**
 * Main component for the editor, manages steps.
 */
@Component({
  selector: 'glp-loop-editor',
  templateUrl: './loop-editor.component.html',
  styleUrls: ['./loop-editor.component.scss']
})
export class LoopEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
