import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './website/components/nav/nav.component';
import { HeroComponent } from './website/components/hero/hero.component';
import { AboutComponent } from './website/components/about/about.component';
import { ExperienceComponent } from './website/components/experience/experience.component';
import { ButtonComponent } from './website/components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
