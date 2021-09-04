import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
slideOpts = {
  initialSlide:0
}
  constructor(private router:Router) { }

  ngOnInit() {
  }
  test1(){
    this.router.navigateByUrl('splash/infocovid');
  }
  test2(){
    this.router.navigateByUrl('splash/inicio');
  }
}
