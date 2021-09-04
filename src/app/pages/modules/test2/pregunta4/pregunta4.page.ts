import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-pregunta4',
  templateUrl: './pregunta4.page.html',
  styleUrls: ['./pregunta4.page.scss'],
})
export class Pregunta4Page implements OnInit {
  radiogroup:any;
  constructor(private router: Router, private storage: Storage) { }

  radioGroupChange(event) {
    this.radiogroup = event.detail.value;
    if (this.radiogroup == "ninguno") {
      this.router.navigateByUrl("splash/result");
      this.storage.set("pregunta4", this.radiogroup);
    } else {
      this.router.navigateByUrl("splash/result");
      this.storage.set("pregunta4", this.radiogroup);
    }
    console.log(this.radiogroup);
  }
  goBack() {
    this.router.navigateByUrl("splash/inicio");
  }
  goNext() {
    this.router.navigateByUrl("splash/result");
  }
  ngOnInit(){

  }

}
