import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.page.html',
  styleUrls: ['./userinfo.page.scss'],
})
export class UserinfoPage implements OnInit {
  selectedGroup:any;
  selectedGroupCity:any;
  radioGroup:any;
  constructor(private storage:Storage, private router: Router) { }
  selectGroupChange(event){
    this.selectedGroup = event.detail.value;
    this.storage.set('pais', this.selectedGroup);
  }
  selectGroupCityChange(event){
    this.selectedGroupCity = event.detail.value;
    this.storage.set('ciudad', this.selectedGroupCity);
  }
  radioGroupChange(event){
    this.radioGroup = event.detail.value;
    this.storage.set('userinfo', this.radioGroup);
  }
  ngOnInit() {
  }
  goLogin(){
    this.router.navigateByUrl('splash/login');
  }
}
