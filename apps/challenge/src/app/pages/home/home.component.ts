import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubService } from '../../services/github.service';
import { CommitItem, CommitDetails } from '@gemography/api-interfaces';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'gemography-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  commits: Array<any>;
  constructor(private readonly ghSvc: GithubService) { }
  markdown: string;
  ngOnInit(): void {
    this.ghSvc.getRepoCommits("mouadcherkaoui", "gemo-challenge")
    // .pipe(map((v: any[]) => v.forEach(i => this.commits.push(new CommitItem(i)))))
      .subscribe((res: Array<any>) => {
        this.commits = res;
        console.log(this.commits);
      })
  }

}
