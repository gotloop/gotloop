import { inject, Injectable } from '@angular/core';
import { RandomFactoryService } from '../../core/services/random-factory.service';
import { BehaviorSubject } from 'rxjs';

import { LoopModel } from '@gotloop/api-model';

@Injectable({
  providedIn: 'root',
})
export class LoopsService {
  public loops$: BehaviorSubject<LoopModel[]>;

  private loops: LoopModel[] = [];

  private rng = inject(RandomFactoryService);

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.loops.push(this.rng.randomLoop());
    }
    this.loops$ = new BehaviorSubject<LoopModel[]>(this.loops);
  }

  addTenMoreLoops() {
    for (let i = 0; i < 10; i++) {
      this.loops.push(this.rng.randomLoop());
    }
    this.loops$.next(this.loops);
  }
}
