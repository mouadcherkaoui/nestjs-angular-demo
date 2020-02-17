import { Component, OnInit } from '@angular/core';

import { GithubService } from '../../services/github.service';
import { NestApiService } from '../../services/nest-api.service';

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
    if(environment.production){
      this.ghSvc.getUserRepos("mouadcherkaoui")
        .subscribe((v:any) => this.repos = v.items);
    }else {
      this.apiSvc.getUserRepos("mouadcherkaoui")
        .subscribe((v:any) => this.repos = v.items);
    }
}

