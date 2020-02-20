import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClarityModule, ClrFormsModule } from '@clr/angular';
import { NgxMdModule } from 'ngx-md';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SideNavComponent } from './components';

import { HomeComponent, MyreposComponent, RepoDetailsComponent, FireReposComponent, TopReposComponent, LoginComponent } from './pages';

import { GithubService, NestApiService } from './services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes:Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'toprepos', component: TopReposComponent},
  { path: 'repos/:user/:repo', component: RepoDetailsComponent},
  { path: 'myrepos', component: MyreposComponent},
  { path: 'export-repos', component: FireReposComponent}

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
    ClarityModule,
    ClrFormsModule,
    NgxMdModule.forRoot()
  ],
  providers: [HttpClient, GithubService, NestApiService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
