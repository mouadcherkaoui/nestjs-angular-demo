import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopReposComponent } from './pages/top-repos/top-repos.component';
import { GithubService } from './services/github.service';
import { HomeComponent } from './pages/home/home.component';
import { SideNavComponent } from './components/side-nnav/side-nav.component';

const routes:Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'toprepos', component: TopReposComponent}
]

@NgModule({
  declarations: [AppComponent, TopReposComponent, HomeComponent, SideNnavComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ClarityModule,
  ],
  providers: [HttpClient, GithubService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
