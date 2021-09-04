import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { AlertController } from '@ionic/angular';

@Component({
  selector: "app-pregunta3",
  templateUrl: "./pregunta3.page.html",
  styleUrls: ["./pregunta3.page.scss"],
})
export class Pregunta3Page implements OnInit {
  array: any;
  sintomas: any = [];
  valid: boolean = false;
  validar: boolean = false;
  total: any = [];
  isIndeterminate: boolean;
  masterCheck: boolean;
  none: any;
  thing: any = [];
  check: boolean;
  constructor(private router: Router, private storage: Storage, private alertController: AlertController) {
    this.array = [
      {
        id: 1,
        name:
          "Fever of 100 F (37.8 C) or above, or possible fever symptoms like alternating chills and sweating",
        isItemChecked: false,
        value: "fever",
      },
      {
        id: 2,
        name: "Cough",
        isItemChecked: false,
        value: "cough",
      },
      {
        id: 3,
        name: "Trouble breathing, shortness of breath or severe wheezing",
        isItemChecked: false,
        value: "trouble",
      },
      {
        id: 4,
        name: "Chills or repeated shaking with chills",
        isItemChecked: false,
        value: "chills",
      },
      {
        id: 5,
        name: "Muscle aches",
        isItemChecked: false,
        value: "muscle",
      },
      {
        id: 6,
        name: "Loss of smell or taste, or a change in taste",
        isItemChecked: false,
        value: "loss",
      },
      {
        id: 7,
        name: "Nausea, vomiting or diarrhea",
        isItemChecked: false,
        value: "nausea",
      },
      {
        id: 8,
        name: "Headache",
        isItemChecked: false,
        value: "headache",
      },
    ];
  }
  async alert() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Alert",
      message:
        "Please selected any real symptoms",
      buttons: [
        {
          text: "Okay",
          handler: () => {
          },
        },
      ],
    });

    await alert.present();
  }

  ngOnInit() { }
  checkEvent() {
    const totalItems = this.array.length;
    let checked = 0;
    this.array.map((obj) => {
      if (obj.isChecked) {
        checked++;
      }
    });
    if (checked > 0 && checked < totalItems) {
      this.thing.push(checked);
      this.storage.set("any", this.thing.length);
      this.storage.set("all", this.thing.length);
      this.storage.set("none", null);
      this.router.navigateByUrl('splash/pregunta4')
      //If even one item is checked but not all
      this.isIndeterminate = true;
      this.masterCheck = false;
    } else if (checked == totalItems) {
      //If all are checked
      this.masterCheck = true;
      this.isIndeterminate = false;
    } else {
      //If none is checked
      this.isIndeterminate = false;
      this.masterCheck = false;
      this.sintomas = 0;
    }
  }
  select(event) {
    this.check = event.detail.checked;
    console.log(this.check);
    this.none = "nada";
    if (this.check == true) {
      this.array.map((obj) => {
        console.log(obj);
        this.isIndeterminate = false;
        this.masterCheck = false;
        obj.isChecked = false;
        this.sintomas = [0];
        this.storage.set("any", this.sintomas);
        this.storage.set("none", this.none);
        this.storage.set('all', 0)
      });
      this.router.navigateByUrl('splash/result')
    }
  }
  goBack() {
    this.router.navigateByUrl("splash/inicio");
  }
  goNext() {
    console.log(this.masterCheck)
    if (this.masterCheck == undefined) {
      this.alert();
    }
    if (this.masterCheck == false) {
      this.router.navigateByUrl("splash/result");
    }
    if (this.masterCheck == true)
      this.router.navigateByUrl("splash/result");
  }
}
