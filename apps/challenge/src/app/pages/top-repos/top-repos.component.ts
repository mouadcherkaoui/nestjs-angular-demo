import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { NestApiService } from '../../services/nest-api.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'gemography-top-repos',
  templateUrl: './top-repos.component.html',
  styleUrls: ['./top-repos.component.css']
})
export class TopReposComponent implements OnInit {
  repos: Array<item>;
  selectedRepo = null;
  constructor(private readonly ghSvc: GithubService, private readonly apiSvc: NestApiService) { }

  ngOnInit(): void {
    // this.ghSvc.getTopRepos(this.back30Days())
    //   .subscribe((v:any) => this.repos = v.items);
    this.apiSvc.getTopRepos(this.back30Days())
      .subscribe((v:any) => this.repos = v.items);
  }

  back30Days() {
    const dateToReturn = new Date();
    dateToReturn.setDate(dateToReturn.getDate() - 30);
    return dateToReturn.toISOString().substring(0, 10);
  }
}

export interface item {name:string, html_url:string}
