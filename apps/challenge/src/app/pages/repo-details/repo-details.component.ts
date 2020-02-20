import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { GithubService, NestApiService } from '../../services';

import { environment } from '../../../environments/environment';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'gemography-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {
  author: string;
  repo: string;
  commits: Array<any>;
  constructor(private readonly ghSvc: GithubService,
    private readonly apiSvc: NestApiService,
    private readonly activeRoute: ActivatedRoute) { }
  markdown: string;
  ngOnInit(): void {
    this.activeRoute.params
      .subscribe((params: Params) => {
        if(!environment.API_SVC_SWITCH){
          this.ghSvc.getRepoCommits(params["user"], params["repo"])
            .subscribe((res: Array<any>) => {
              this.commits = res;
            })
        }else{
          this.apiSvc.getRepoCommits(params["user"], params["repo"])
            .subscribe((res:any) => this.commits = res);
        }
        this.author = params["user"];
        this.repo = params["repo"];
      });
  }
}
