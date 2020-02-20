import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommitItem, CommitDetails } from '@gemography/api-interfaces';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { NestApiService, GithubService } from '../../services';

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
    if(!environment.API_SVC_SWITCH){
      this.ghSvc.getRepoCommits("mouadcherkaoui", "gemo-challenge")
        .subscribe((res: Array<any>) => {
          this.commits = res;
        })
    }else{
      this.apiSvc.getRepoCommits("mouadcherkaoui", "gemo-challenge")
        .subscribe((res:any) => this.commits = res);
    }

  }

}
