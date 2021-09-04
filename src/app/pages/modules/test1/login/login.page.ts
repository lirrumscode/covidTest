import { Component, OnInit } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Router } from "@angular/router";
import { AlertController, ToastController } from "@ionic/angular";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  form = {
    nombre: "",
    apellido: "",
    celular: 0,
  };
  constructor(
    private storage: Storage,
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  next(form) {
    if (form.nombre == "" || form.apellido == "" || form.celular == 0) {
      this.message("¡Por favor llena todos los campos!");
    } else {
      this.storage.set("user", form);
      this.alert();
    }
  }

  async message(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: "bottom",
      mode:"md"
    });
    toast.present();
  }

  async alert() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Alerta",
      mode:"ios",
      message:
        "Hemos guardado tú información con exito, por favor responde las siguientes preguntas",
      buttons: [
        {
          text: "Okay",
          handler: () => {
            this.router.navigateByUrl("splash/encuesta1");
          },
        },
      ],
    });

    await alert.present();
  }
}