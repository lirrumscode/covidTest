import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-infcovid',
  templateUrl: './infcovid.page.html',
  styleUrls: ['./infcovid.page.scss'],
})
export class InfcovidPage implements OnInit {

  constructor(private alertController: AlertController,
    private router: Router) { }
  goDesacuerdo(){
    this.alert();
  }
  async alert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Por favor selecciona "de acuerdo"',
      buttons: [ {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  goUsertype(){
    this.router.navigateByUrl('splash/usertype');
  }
  ngOnInit() {
  }

}
