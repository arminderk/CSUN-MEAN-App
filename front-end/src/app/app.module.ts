import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import {ValidateService} from './services/validate.service';
import {AddClassService} from './services/add-class.service';
import {AuthService} from './services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthGuard} from './guards/auth.guard';
import { ClassesComponent } from './components/classes/classes.component';
import { BasicSkillsComponent } from './components/requirements/basic-skills/basic-skills.component';
import { NaturalSciencesComponent } from './components/requirements/natural-sciences/natural-sciences.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ArtsnHumComponent } from './components/requirements/artsn-hum/artsn-hum.component';
import { SocialSciComponent } from './components/requirements/social-sci/social-sci.component';
import { LifeLearnComponent } from './components/requirements/life-learn/life-learn.component';
import { CompCultComponent } from './components/requirements/comp-cult/comp-cult.component';
import { CsReqsComponent } from './components/requirements/cs-reqs/cs-reqs.component';


const appRoutes: Routes = [ 
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path: 'classes', component: ClassesComponent},


]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    ClassesComponent,
    BasicSkillsComponent,
    NaturalSciencesComponent,
    SidebarComponent,
    ArtsnHumComponent,
    SocialSciComponent,
    LifeLearnComponent,
    CompCultComponent,
    CsReqsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, AuthGuard, AddClassService],
  bootstrap: [AppComponent]
})
export class AppModule { }
