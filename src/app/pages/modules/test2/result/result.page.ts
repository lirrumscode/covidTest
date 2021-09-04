import { Component, OnInit } from "@angular/core";
import { Storage } from "@ionic/storage";
import { formatDate } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-result",
  templateUrl: "./result.page.html",
  styleUrls: ["./result.page.scss"],
})
export class ResultPage implements OnInit {

  resultado: any;
  color: any;
  today = new Date();
  date = "";
  fecha: any;
  img: any = "../assets/img/qr.jpeg";
  descripcion: any;
  codigo: any = 182613;
  any: any;
  nothing: any;
  text: any;
  validar: any;
  constructor(private storage: Storage) { }
  ngOnInit() {
    this.fecha = this.date = formatDate(
      this.today,
      "dd-MM-yyyy hh:mm:ss a",
      "en-US",
      "GMT-5"
    );
    this.validacion();
  }

  colorAmarillo() {
    this.color = "#ffd534";
    this.codigo;
    this.descripcion = "You can enter the plant with extreme precautions";
    this.text =
      "Please go to the medical area or follow the instructions of the medical staff.";
    this.img = "./assets/img/qr.jpeg";
  }
  colorVerde() {
    this.color = "#2fdf75";
    this.codigo = 12345679;
    this.img = "./assets/img/qr.jpeg";
    this.descripcion = "You can enter the plant";
    this.text =
      "Please scan the QR code upon arrival, or failing that, you will be asked for the access code";
  }
  colorRojo() {
    this.color = "#ff4961";
    this.codigo = 0;
    this.descripcion = "FOR SECURITY MEASURES YOU CANNOT ENTER THE PLANT";
    this.text = "";
    this.img = "";
  }
  validacion() {
    this.storage.get("none").then((res) => {
      this.nothing = res;
      this.storage.get("pregunta1").then((res) => {
        let pregunta1 = res;
        this.storage.get("pregunta2").then((res) => {
          let pregunta2 = res;
          if (pregunta1 == "no" && this.nothing == "nada") { this.colorVerde() }
          if (pregunta1 == "si" && pregunta2 == "si" && this.nothing === "nada") { this.colorRojo() }
          if (pregunta1 == "si" && pregunta2 == "no" && this.nothing === "nada") { this.colorAmarillo() }
        });
      });
    });
    this.storage.get("any").then((res) => {
      this.any = res;
      this.storage.get("pregunta1").then((res) => {
        let pregunta1 = res;
        this.storage.get("pregunta2").then((res) => {
          let pregunta2 = res;
          this.storage.get("pregunta4").then((res) => {
            let pregunta4 = res;
            if (pregunta1 == "si" && pregunta2 == "si" && this.any >= 1 && pregunta4 == "ninguno") { console.log('entro1'); this.colorRojo() }
            if (pregunta1 == "si" && pregunta2 == "si" && this.any >= 1 && pregunta4 == "remal") { this.colorRojo() }
            if (pregunta1 == "si" && pregunta2 == "si" && this.any >= 1 && pregunta4 == "mal") { this.colorRojo() }
            if (pregunta1 == "si" && pregunta2 == "no" && this.any >= 1 && pregunta4 == "mal") { this.colorRojo() }
            if (pregunta1 == "si" && pregunta2 == "no" && this.any >= 1 && pregunta4 == "remal") { this.colorRojo() }
            if (pregunta1 == "no" && this.any >= 1 && pregunta4 == "mal") { this.colorRojo() }
            if (pregunta1 == "no" && this.any >= 1 && pregunta4 == "remal") { this.colorRojo() }
            if (pregunta1 == "no" && this.any >= 1 && pregunta4 == "ninguno") { this.colorAmarillo() }
            if (pregunta1 == "si" && pregunta2 == "no" && this.any >= 1 && pregunta4 == "ninguno") { this.colorAmarillo() }
          })
        });
      });
    });
  }
}
