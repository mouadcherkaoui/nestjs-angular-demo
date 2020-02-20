import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { NestApiService } from '../../services/nest-api.service';

@Component({
  selector: 'gemography-fire-repos',
  templateUrl: './fire-repos.component.html',
  styleUrls: ['./fire-repos.component.css']
})
export class FireReposComponent implements OnInit {
  repos: [];
  constructor(private readonly ghSvc: GithubService, 
    private readonly apiSvc: NestApiService) { }

  ngOnInit(): void {
    this.apiSvc.getTopRepos()
      .subscribe((repos:[]) => this.repos = repos)
  }

  pushRepos() {
    this.apiSvc.saveRepos(this.repos);
  }

}
