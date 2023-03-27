import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngulerHydrogenModule } from './module/anguler-hydrogen/anguler-hydrogen.module';
import { YcAngulerShareMaterialModule } from './module/yc-anguler-share-material/yc-anguler-share-material.module';
import { HomeComponent } from './page/home/home.component';
import { DirectiveAsyncClickComponent } from './page/directive-async-click/directive-async-click.component';
import { DirectiveHoverComponent } from './page/directive-hover/directive-hover.component';
import { DecoratorIgnoreBeforeFinishComponent } from './page/decorator-ignore-before-finish/decorator-ignore-before-finish.component';
import { ComponentFloatingActionMenuCustomComponent } from './page/component-floating-action-menu-custom/component-floating-action-menu-custom.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectiveAsyncClickComponent,
    DirectiveHoverComponent,
    DecoratorIgnoreBeforeFinishComponent,
    ComponentFloatingActionMenuCustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YcAngulerShareMaterialModule,
    AngulerHydrogenModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
