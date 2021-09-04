import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-encuesta2',
  templateUrl: './encuesta2.page.html',
  styleUrls: ['./encuesta2.page.scss'],
})
export class Encuesta2Page implements OnInit {
  choose:any;
  constructor(private storage:Storage, private router: Router) { 
  }
  radioGroupChange(event){
    console.log(event.detail.value);
    if (event.detail.value == "si") {
      this.storage.set('encuesta2', event.detail.value); 
      this.router.navigateByUrl('splash/resultado')
    } else if(event.detail.value == "no") {
      this.storage.set('encuesta2', event.detail.value);
      this.router.navigateByUrl('splash/encuesta3')
    }
       
  }
  goBack(){
    this.router.navigateByUrl('splash/encuesta1');
  }
  goNext(){
    this.router.navigateByUrl('splash/encuesta3');
  }
  ngOnInit() {


  }

}
