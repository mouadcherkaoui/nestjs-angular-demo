import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@gemography/api-interfaces';

@Component({
  selector: 'gemography-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  show_login = false;
  hello$ = this.http.get<Message>('/api/hello');

  constructor(private http: HttpClient) {}

  showLogin() {
    this.show_login = true;
  }
}
