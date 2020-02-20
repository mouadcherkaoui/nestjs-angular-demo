import { Component, OnInit } from '@angular/core';

import { GithubService, NestApiService } from '../../services';

import { RepoItem } from '@gemography/api-interfaces';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'gemography-myrepos',
  templateUrl: './myrepos.component.html',
  styleUrls: ['./myrepos.component.css']
})
export class MyreposComponent implements OnInit {
  repos: Array<RepoItem>;
  selectedRepo = null;
  constructor(private readonly ghSvc: GithubService,
    private readonly apiSvc: NestApiService) { }
  ngOnInit(): void {
    if(!environment.API_SVC_SWITCH){
      this.ghSvc.getUserRepos("mouadcherkaoui")
        .subscribe((v:any) => this.repos = v);
    }else {
      this.apiSvc.getUserRepos("mouadcherkaoui")
        .subscribe((v:any) => this.repos = v);
    }
  }

}