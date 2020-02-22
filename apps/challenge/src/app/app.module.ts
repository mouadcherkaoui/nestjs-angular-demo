import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes} from '@angular/router';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ClarityModule, ClrFormsModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { SideNavComponent } from './components';
import { HomeComponent, MyreposComponent, RepoDetailsComponent, FireReposComponent, TopReposComponent, LoginComponent } from './pages';
import { GithubService, NestApiService, AuthService, AuthGuard } from './services';
import { environment } from '../environments/environment';

import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const adminOnly = () => hasCustomClaim('admin');
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['myrepos']);
const belongsToAccount = (next) => hasCustomClaim(`account-${next.params.id}`);

const routes:Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'toprepos', component: TopReposComponent},
  { path: 'repos/:user/:repo', component: RepoDetailsComponent},
  { path: 'myrepos', component: MyreposComponent},
  { path: 'export-repos', component: FireReposComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'login', component: LoginComponent}
]

@NgModule({
  declarations: [AppComponent, TopReposComponent, 
    HomeComponent, SideNavComponent, MyreposComponent, 
    RepoDetailsComponent, FireReposComponent, LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.FIREBASE_CONFIG),
    AngularFireAuthModule,
    ClarityModule,
    ClrFormsModule
  ],
  providers: [HttpClient, GithubService, NestApiService, AuthService, AngularFireAuth, AngularFireAuthGuard ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}