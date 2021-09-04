import { Component, OnInit } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Router } from "@angular/router";

@Component({
  selector: "app-usertype",
  templateUrl: "./usertype.page.html",
  styleUrls: ["./usertype.page.scss"],
})
export class UsertypePage implements OnInit {
  selectedRadioGroup: any;
  constructor(private storage: Storage, private router: Router) {}
  radioGroupChange(event) {
    this.selectedRadioGroup = event.detail.value;
    console.log(this.selectedRadioGroup);
    this.storage.set("usertype", this.selectedRadioGroup);
  }
  ngOnInit() {}
  gotoUserInfo() {
    this.router.navigateByUrl("splash/userinfo");
  }
}
