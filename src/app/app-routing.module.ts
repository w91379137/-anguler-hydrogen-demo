import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { DirectiveAsyncClickComponent } from './page/directive-async-click/directive-async-click.component';
import { DirectiveHoverComponent } from './page/directive-hover/directive-hover.component';
import { DecoratorIgnoreBeforeFinishComponent } from './page/decorator-ignore-before-finish/decorator-ignore-before-finish.component';
import { ComponentFloatingActionMenuCustomComponent } from './page/component-floating-action-menu-custom/component-floating-action-menu-custom.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'directive-async-click', component: DirectiveAsyncClickComponent },
  { path: 'directive-hover', component: DirectiveHoverComponent },
  { path: 'decorator-ignore-before-finish', component: DecoratorIgnoreBeforeFinishComponent },
  { path: 'component-floating-action-menu-custom', component: ComponentFloatingActionMenuCustomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
