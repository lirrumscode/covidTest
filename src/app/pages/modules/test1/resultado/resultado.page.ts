import { Component, OnInit } from "@angular/core";
import { Storage } from "@ionic/storage";
import { formatDate } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-resultado",
  templateUrl: "./resultado.page.html",
  styleUrls: ["./resultado.page.scss"],
})
export class ResultadoPage implements OnInit {
  color: any;
  today = new Date();
  date = "";
  fecha: any;
  img: any;
  descripcion: any;
  codigo: any = 182613;
  any: any;
  nothing: any;
  text: any;
  user: any = [];
  constructor(private storage: Storage, private router: Router) {}
  ngOnInit() {
    this.fecha = this.date = formatDate(
      this.today,
      "dd-MM-yyyy hh:mm:ss a",
      "en-US",
      "GMT-5"
    );
    this.storage.get("user").then((res) => {
      this.user = res;
    });
    this.validacion();
  }
  colorAmarillo() {
    try {
      this.color = "#ffd534";
      this.codigo;
      this.descripcion = "You can enter the plant with extreme precautions";
      this.text =
        "Please go to the medical area or follow the instructions of the medical staff.";
      this.img = "./assets/img/qr.jpeg";
    } catch (error) {
      console.error(error);
    }
  }
  colorVerde() {
    try {
      this.color = "#2fdf75";
      this.codigo = 12345679;
      this.img = "./assets/img/qr.jpeg";
      this.descripcion = "You can enter the plant";
      this.text =
        "Please scan the QR code upon arrival, or failing that, you will be asked for the access code";
    } catch (error) {
      console.error(error);
    }
  }
  colorRojo() {
    try {
      this.color = "#ff4961";
      this.codigo = 0;
      this.descripcion = "FOR SECURITY MEASURES YOU CANNOT ENTER THE PLANT";
      this.text = "";
      this.img = "";
    } catch (error) {
      console.error(error);
    }
  }
  validacion() {
    try {
      this.storage.get("nadita").then((res) => {
        this.nothing = res;
        this.storage.get("encuesta2").then((res) => {
          let pregunta2 = res;
          this.storage.get("encuesta3").then((res) => {
            let pregunta3 = res;
            console.log(this.nothing);
            if (this.nothing == "nada" && pregunta2 == "si") {
              this.colorRojo();
            }
            if (
              this.nothing == "nada" &&
              pregunta2 == "no" &&
              pregunta3 == "si"
            ) {
              this.colorVerde();
            }
            if (
              this.nothing === "nada" &&
              pregunta2 == "no" &&
              pregunta3 == "no"
            ) {
              this.colorRojo();
            }
            if (
              this.nothing === "nada" &&
              pregunta2 == "no" &&
              pregunta3 == "termometro"
            ) {
              this.colorAmarillo();
            }
          });
        });
      });
      this.storage.get("cualquiera").then((res) => {
        this.any = res;
        this.storage.get("encuesta2").then((res) => {
          let pregunta2 = res;
          this.storage.get("encuesta3").then((res) => {
            let pregunta3 = res;
            if (this.any >= 1 && pregunta2 == "si") {
              this.colorRojo();
            }
            if (this.any >= 1 && pregunta2 == "no" && pregunta3 == "si") {
              this.colorAmarillo();
            }
            if (this.any >= 1 && pregunta2 == "no" && pregunta3 == "no") {
              this.colorRojo();
            }
            if (
              this.any >= 1 &&
              pregunta2 == "no" &&
              pregunta3 == "termometro"
            ) {
              this.colorAmarillo();
            }
          });
        });
      });
    } catch (error) {
      console.error(error);
    }
  }
}
