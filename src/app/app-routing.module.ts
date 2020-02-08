import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IconsPageComponent } from './core/components/icons-page/icons-page.component';
import { ErrorPageComponent } from './core/components/error-page/error-page.component';
import { NotFoundPageComponent } from './core/components/not-found-page/not-found-page.component';
import { HomePageComponent } from './core/components/home-page/home-page.component';

const routes: Routes = [
  /*{
    path: '/',
    component: HomePage,
  },*/
  {
    path: 'loops',
    loadChildren: () => import('./loops/loops.module').then(m => m.LoopsModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
  },
  {
    path: 'loop/:id',
    loadChildren: () => import('./loop-detail/loop-detail.module').then(m => m.LoopDetailModule),
  },
  {
    path: 'loop/:id/edit',
    loadChildren: () => import('./loop-editor/loop-editor.module').then(m => m.LoopEditorModule),
  },
  {
    path: 'noizr',
    loadChildren: () => import('./noizr/noizr.module').then(m => m.NoizerModule),
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
