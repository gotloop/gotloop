import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { IconComponent } from './components/icon/icon.component';
import { HeaderSearchComponent } from './components/header-search/header-search.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentPageComponent } from './components/content-page/content-page.component';

import { CardContentComponent } from './components/card/card-content.component';
import { CardFooterComponent } from './components/card/card-footer.component';
import { CardHeaderComponent } from './components/card/card-header.component';
import { StoreModule } from '@ngrx/store';
import * as fromShell from './reducers/shell.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ShellEffects } from './effects/shell.effects';

@NgModule({
  declarations: [
    CardComponent,
    CardContentComponent,
    CardFooterComponent,
    CardHeaderComponent,
    HeaderComponent,
    IconComponent,
    HeaderSearchComponent,
    FooterComponent,
    ContentPageComponent,
  ],
  exports: [
    CardComponent,
    CardContentComponent,
    CardFooterComponent,
    CardHeaderComponent,
    HeaderComponent,
    IconComponent,
    HeaderSearchComponent,
    FooterComponent,
    ContentPageComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule, StoreModule.forFeature('shell', fromShell.reducer), EffectsModule.forFeature([ShellEffects])],
})
export class ShellModule {}
