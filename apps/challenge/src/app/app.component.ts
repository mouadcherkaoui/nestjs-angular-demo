import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@gemography/api-interfaces';
import { loggedIn } from '@angular/fire/auth-guard';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
@Component({
  selector: 'gemography-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  show_login = false;
  isLoggedIn: boolean | any[];
  hello$ = this.http.get<Message>('/api/hello');

  constructor(private http: HttpClient, private fireAuth: AngularFireAuth) {
    loggedIn(this.fireAuth.authState).subscribe(s => 
      this.isLoggedIn = s      
      );
  }
  showLogin() {
    this.show_login = true;
  }
}
