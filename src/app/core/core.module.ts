import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsPageComponent } from './components/icons-page/icons-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ShellModule } from '../shell/shell.module';

@NgModule({
  declarations: [
    IconsPageComponent,
    NotFoundPageComponent,
    ErrorPageComponent,
    HomePageComponent,
  ],
  imports: [CommonModule, ShellModule],
  entryComponents: [
    IconsPageComponent,
    NotFoundPageComponent,
    ErrorPageComponent,
    HomePageComponent,
  ],
})
export class CoreModule {}
