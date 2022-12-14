import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ButtonComponent } from './components/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { HysComponent } from './components/hys/hys.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EditSkillComponent } from './components/hys/edit-skill.component';
import { NewSkillComponent } from './components/hys/new-skill.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    AboutComponent,
    ButtonComponent,
    HomeComponent,
    LoginComponent,
    ExperienciaComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EducacionComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    HysComponent,
    EditSkillComponent,
    NewSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
