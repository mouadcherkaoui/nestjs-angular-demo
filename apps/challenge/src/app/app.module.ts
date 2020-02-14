import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopReposComponent } from './pages/top-repos/top-repos.component';
import { GithubService } from './services/github.service';

@NgModule({
  declarations: [AppComponent, TopReposComponent],
  imports: [BrowserModule, HttpClientModule, ClarityModule, BrowserAnimationsModule],
  providers: [HttpClient, GithubService],
  bootstrap: [AppComponent]
})
export class AppModule {}
