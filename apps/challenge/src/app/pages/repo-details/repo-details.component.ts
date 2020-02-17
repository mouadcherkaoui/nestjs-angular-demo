import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; 

import { GithubService } from '../../services/github.service';
import { NestApiService } from '../../services/nest-api.service';

import { environment } from '../../../environments/environment';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'gemography-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {

  commits: Array<any>;
  constructor(private readonly ghSvc: GithubService,
    private readonly apiSvc: NestApiService,
    private readonly activeRoute: ActivatedRoute) { }
  markdown: string;
  ngOnInit(): void {
    this.activeRoute.params
      .subscribe((params: Params) => {        
        if(environment.production){
          this.ghSvc.getRepoCommits(params["user"], params["repo"])
            .subscribe((res: Array<any>) => {
              this.commits = res;
              console.log(this.commits);
            })
        }else{
          this.apiSvc.getRepoCommits(params["user"], params["repo"])
            .subscribe((res:any) => this.commits = res);
        }
      })
  }
}
