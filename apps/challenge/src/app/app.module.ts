import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClarityModule } from '@clr/angular';
import { NgxMdModule } from 'ngx-md';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { GithubService } from './services/github.service';
import { HomeComponent } from './pages/home/home.component';

import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nnav/side-nav.component';
import { TopReposComponent } from './pages/top-repos/top-repos.component';

import { MyreposComponent } from './pages/myrepos/myrepos.component';
import { RepoDetailsComponent } from './pages/repo-details/repo-details.component';
import { FireReposComponent } from './pages/fire-repos/fire-repos.component';
import { NestApiService } from './services/nest-api.service';

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
    RepoDetailsComponent, FireReposComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ClarityModule,
    NgxMdModule.forRoot()
  ],
  providers: [HttpClient, GithubService, NestApiService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
