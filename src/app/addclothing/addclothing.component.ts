import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import {Router} from '@angular/router';

@Component({
  selector: 'AddClothingComponent',
  templateUrl: './addclothing.html',
})
export class AddClothingComponent {
  http: Http;
  router: Router;
  postResponse: String;
  addClothingForm = new FormGroup({
    type: new FormControl(),
    price: new FormControl()
  });
constructor(http: Http, router: Router) {
  this.http = http;
  this.router = router;
  if (localStorage.getItem('token') != null) {
    this.router.navigate(['./']);
  }
}
onAddClothing(): void {
  var data = "type=" + this.addClothingForm.value.type + "&& price=" + this.addClothingForm.value.price;
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  this.http.post('http://localhost/metshop/addclothing.php', data, { headers:headers })
  .subscribe(
    data => {
      if (data["_body"] == "ok") {
        this.router.navigate(['./']);
      }
    }
  );
  }
}
