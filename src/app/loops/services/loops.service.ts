import { Injectable } from '@angular/core';
import { RandomFactoryService } from 'src/app/core/services/random-factory.service';
import { Observable, BehaviorSubject } from 'rxjs';

// import { LoopModel } from '@gotloop/lib';

@Injectable({
  providedIn: 'root'
})
export class LoopsService {
  public loops$: BehaviorSubject<any[]>;


  private loops: any[] = [];

  constructor(private rng: RandomFactoryService) {

    for (let i = 0; i < 10; i++) {
      this.loops.push(this.rng.randomLoop());
    }
    this.loops$ =  new BehaviorSubject<any[]>(this.loops);
  }

  addTenMoreLoops() {
    for (let i = 0; i < 10; i++) {
     this.loops.push(this.rng.randomLoop());
    }
    this.loops$.next(this.loops);
  }
}
