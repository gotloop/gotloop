import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailsRoutingModule } from './user-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUser from './reducers/user.reducer';
import { UserEffects } from './effects/user.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserDetailsRoutingModule,
    StoreModule.forFeature('user', fromUser.reducer),
    EffectsModule.forFeature([UserEffects]),
  ]
})
export class UserModule { }
