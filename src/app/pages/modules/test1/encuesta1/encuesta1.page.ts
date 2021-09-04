import { Component, OnInit } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Router } from "@angular/router";

@Component({
  selector: "app-encuesta1",
  templateUrl: "./encuesta1.page.html",
  styleUrls: ["./encuesta1.page.scss"],
})
export class Encuesta1Page implements OnInit {
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
  hola:boolean = true;
  constructor(private router: Router, private storage: Storage) {
    this.array = [
      {
        id: 1,
        name:
          "Fiebre de 100 F (37.8 C) o más, o posibles síntomas de fiebre como escalofríos y sudoración alternantes",
        isItemChecked: false,
        value: "fever",
      },
      {
        id: 2,
        name: "Tos",
        isItemChecked: false,
        value: "cough",
      },
      {
        id: 3,
        name: "Problemas para respirar, falta de aliento o sibilancias severas",
        isItemChecked: false,
        value: "trouble",
      },
      {
        id: 4,
        name: "Escalofríos o temblores repetidos con escalofríos.",
        isItemChecked: false,
        value: "chills",
      },
      {
        id: 5,
        name: "Dolores musculares",
        isItemChecked: false,
        value: "muscle",
      },
      {
        id: 6,
        name: "Pérdida del olfato o del gusto, o un cambio en el gusto.",
        isItemChecked: false,
        value: "loss",
      },
      {
        id: 7,
        name: "Náuseas, vómitos o diarrea",
        isItemChecked: false,
        value: "nausea",
      },
      {
        id: 8,
        name: "Dolor de cabeza",
        isItemChecked: false,
        value: "headache",
      },
    ];
  }

  ngOnInit() {}
  /*checkMaster() {
    setTimeout(() => {
      this.array.forEach((obj) => {
        obj.isChecked = this.masterCheck;
        this.sintomas.push(obj);
        console.log(this.sintomas);
        this.check = false;
        this.validar = true;
        this.none = null;
      });
      this.storage.set("todo", this.sintomas.length);
    });
  }*/

  checkEvent() {
    const totalItems = this.array.length;
    let checked = 0;
    this.array.map((obj) => {
      // console.log(obj)
      if (obj.isChecked) {
        checked++;
      }
    });
    if (checked > 0 && checked < totalItems) {
      //this.sintomas.push(checked)
      this.thing.push(checked);
      this.hola = false;
      console.log(this.thing);
      this.storage.set("cualquiera", this.thing.length);
      this.storage.set("todo", this.thing.length);
      this.storage.set("nadita", 0);
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
    console.log(event.detail.checked);
    if(event.detail.checked == true){
      this.array.map((obj) => {
        console.log(obj);
        this.isIndeterminate = false;
        this.masterCheck = false;
        obj.isChecked = false;
        this.sintomas = [0];
        this.storage.set("cualquiera", this.sintomas);
        this.storage.set("nadita", this.none);    
      });
      this.router.navigateByUrl('splash/encuesta2')
    }

  }

  goBack() {
    this.router.navigateByUrl("splash/login");
  }
  goNext() {
    this.router.navigateByUrl("splash/encuesta2");
  }
}
