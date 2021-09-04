import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-pregunta2",
  templateUrl: "./pregunta2.page.html",
  styleUrls: ["./pregunta2.page.scss"],
})
export class Pregunta2Page implements OnInit {
  radiogroup: any;
  constructor(private router: Router, private storage: Storage) {}

  ngOnInit() {}
  radioGroupChange(event) {
    this.radiogroup = event.detail.value;
    if (this.radiogroup == "si") {
      this.router.navigateByUrl("splash/pregunta3");
      this.storage.set("pregunta2", this.radiogroup);
    } else {
      this.router.navigateByUrl("splash/pregunta3");
      this.storage.set("pregunta2", this.radiogroup);
    }
  }
  goBack() {
    this.router.navigateByUrl("splash/inicio");
  }
  goNext() {
    this.router.navigateByUrl("splash/pregunta2");
  }
}
