import { Routes } from '@angular/router';
import { IconsPageComponent } from './core/components/icons-page/icons-page.component';
import { ErrorPageComponent } from './core/components/error-page/error-page.component';
import { NotFoundPageComponent } from './core/components/not-found-page/not-found-page.component';
import { HomePageComponent } from './core/components/home-page/home-page.component';

export const routes: Routes = [
  /*
  {
    path: '/',
    loadComponent: () =>
      import('./core/components/home-page/home-page.component').then(
        (m) => m.HomePageComponent,
      ),
  },
  */
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'loops',
  },
  {
    path: 'loops',
    loadComponent: () =>
      import('./loops/components/loop-list/loop-list.component').then(
        (m) => m.LoopListComponent,
      ),
  },
  {
    path: 'loop/:id',
    loadComponent: () =>
      import('./loop-detail/components/loop-detail/loop-detail.component').then(
        (m) => m.LoopDetailComponent,
      ),
  },
  {
    path: 'loop/:id/edit',
    loadComponent: () =>
      import('./loop-editor/components/loop-editor/loop-editor.component').then(
        (m) => m.LoopEditorComponent,
      ),
  },
  {
    path: 'noizr',
    loadComponent: () =>
      import('./noizr/components/noizer-page/noizer-page.component').then(
        (m) => m.NoizerPageComponent,
      ),
  },
  {
    path: 'icons',
    component: IconsPageComponent,
  },
  {
    path: 'error',
    component: ErrorPageComponent,
  },
  {
    path: 'not-found',
    component: NotFoundPageComponent,
  },
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
  },
];
