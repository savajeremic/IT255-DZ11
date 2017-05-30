import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import {Router} from '@angular/router';

@Component({
  selector: 'AddGameComponent',
  templateUrl: './addgame.html',
})
export class AddGameComponent {
  http: Http;
  router: Router;
  postResponse: String;
  addGameForm = new FormGroup({
    gameName: new FormControl(),
    gameGenre: new FormControl(),
    gamePegi: new FormControl()
  });
constructor(http: Http, router: Router) {
  this.http = http;
  this.router = router;
  if (localStorage.getItem('token') != null) {
    this.router.navigate(['./']);
  }
}
onAddGame(): void {
  var data = "gameName=" + this.addGameForm.value.gameName + "&& gameGenre=" +
  this.addGameForm.value.gameGenre + "&& gamePegi=" + this.addGameForm.value.gamePegi;
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  this.http.post('http://localhost/metshop/addgame.php', data, { headers:headers })
  .subscribe(
    data => {
      if (data["_body"] == "ok") {
        this.router.navigate(['./']);
      }
    }
  );
  }
}
