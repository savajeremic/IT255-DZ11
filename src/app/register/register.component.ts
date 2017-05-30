import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';

@Component({
  selector: 'RegisterComponent',
  templateUrl: './register.html'
})
export class RegisterComponent {
  http: Http;
  router: Router;
  postResponse: String;
  registerForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    email: new FormControl(),
    ime: new FormControl(),
    prezime: new FormControl()
  });
  constructor(http: Http, router: Router) {
    this.http = http;
    this.router = router;
    if (localStorage.getItem('token') != null) {
      this.router.navigate(['./']);
    }
  }
  onRegister(): void {
    var data = "username=" + this.registerForm.value.username +
    "&& password=" + this.registerForm.value.password +
    "&& email=" + this.registerForm.value.email +
    "&& ime=" + this.registerForm.value.ime +
    "&& prezime=" + this.registerForm.value.prezime;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('http://localhost/metshop/registerservice.php', data, {
    headers: headers })
    .subscribe(
      data => {
        if (data["_body"] == "ok") {
          this.router.navigate(['./']);
        }
      }
    );
  }
}
