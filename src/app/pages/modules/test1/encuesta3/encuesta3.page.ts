import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-encuesta3",
  templateUrl: "./encuesta3.page.html",
  styleUrls: ["./encuesta3.page.scss"],
})
export class Encuesta3Page implements OnInit {
  constructor(private storage: Storage, private router: Router) {}
  radioGroupChange(event) {
    console.log(event);
    this.storage.set("encuesta3", event.detail.value);
  }
  goBack() {
    this.router.navigateByUrl("splash/encuesta2");
  }
  goNext() {
    this.router.navigateByUrl("splash/resultado");
  }
  ngOnInit() {}
}
