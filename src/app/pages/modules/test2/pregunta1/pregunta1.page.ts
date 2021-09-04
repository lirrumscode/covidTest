import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-pregunta1",
  templateUrl: "./pregunta1.page.html",
  styleUrls: ["./pregunta1.page.scss"],
})
export class Pregunta1Page implements OnInit {
  radiogroup: any;
  constructor(private router: Router, private storage: Storage) {}

  ngOnInit() {}
  radioGroupChange(event) {
    this.radiogroup = event.detail.value;
    if (this.radiogroup == "si") {
      this.router.navigateByUrl("splash/pregunta2");
      this.storage.set("pregunta1", this.radiogroup);
    } else {
      this.router.navigateByUrl("splash/pregunta3");
      this.storage.set("pregunta1", this.radiogroup);
    }
  }
  goBack() {
    this.router.navigateByUrl("splash/inicio");
  }
  goNext() {
    this.router.navigateByUrl("splash/pregunta2");
  }
}
