import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import { AuthService } from '../../services';

@Component({
  selector: 'gemography-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "test";
  password = "";
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  constructor(private readonly authSvc: AuthService) { }

  ngOnInit(): void {
  }

  ghLogin() {
    this.authSvc.externalLogin().then(c => console.log(c));
  }
}
