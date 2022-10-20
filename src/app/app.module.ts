import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './website/components/nav/nav.component';
import { HeroComponent } from './website/components/hero/hero.component';
import { AboutComponent } from './website/components/about/about.component';
import { ExperienceComponent } from './website/components/experience/experience.component';
import { ButtonComponent } from './website/components/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExperienciasComponent } from './website/components/experiencias/experiencias.component';
import { AddExpComponent } from './website/components/add-exp/add-exp.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ButtonComponent,
    ExperienciasComponent,
    AddExpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
