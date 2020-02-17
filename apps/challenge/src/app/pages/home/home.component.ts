import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubService } from '../../services/github.service';
import { CommitItem, CommitDetails } from '@gemography/api-interfaces';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'apps/challenge/src/environments/environment';
import { NestApiService } from '../../services/nest-api.service';

@Component({
  selector: 'gemography-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  commits: Array<any>;
  constructor(private readonly ghSvc: GithubService,
    private readonly apiSvc: NestApiService) { }
  markdown: string;
  ngOnInit(): void {
    if(environment.production){
      this.ghSvc.getRepoCommits("mouadcherkaoui", "gemo-challenge")
        .subscribe((res: Array<any>) => {
          this.commits = res;
          console.log(this.commits);
        })
    }else{
      this.apiSvc.getRepoCommits("mouadcherkaoui", "gemo-challenge")
        .subscribe((res:any) => this.commits = res);
    }

  }

}
