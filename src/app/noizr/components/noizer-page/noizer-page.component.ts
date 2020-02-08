import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromNoizrPage from '../../reducers/noizr.reducer';
import { CreateSetting } from '../../actions/noizr.actions';

@Component({
  selector: 'glp-noizer-page',
  templateUrl: './noizer-page.component.html',
  styleUrls: ['./noizer-page.component.scss']
})
export class NoizerPageComponent implements OnInit {

  constructor(private readonly store: Store<fromNoizrPage.State>) { }

  ngOnInit() {

  }

  createSettings() {
    this.store.dispatch(new CreateSetting());
  }

  openSettings() {

  }

  deleteSettings() {

  }

  handleAddSource() {

  }
}
