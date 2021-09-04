import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then(m => m.SplashPageModule)
  },
  {
    path: 'splash',
    children: [
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'infocovid',
        loadChildren: () => import('./pages/modules/test1/infcovid/infcovid.module').then(m => m.InfcovidPageModule)
      },
      {
        path: 'usertype',
        loadChildren: () => import('./pages/modules/test1/usertype/usertype.module').then(m => m.UsertypePageModule)
      },
      {
        path: 'userinfo',
        loadChildren: () => import('./pages/modules/test1/userinfo/userinfo.module').then(m => m.UserinfoPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./pages/modules/test1/login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'encuesta1',
        loadChildren: () => import('./pages/modules/test1/encuesta1/encuesta1.module').then(m => m.Encuesta1PageModule)
      },
      {
        path: 'encuesta2',
        loadChildren: () => import('./pages/modules/test1/encuesta2/encuesta2.module').then(m => m.Encuesta2PageModule)
      },
      {
        path: 'encuesta3',
        loadChildren: () => import('./pages/modules/test1/encuesta3/encuesta3.module').then(m => m.Encuesta3PageModule)
      },
      {
        path: 'resultado',
        loadChildren: () => import('./pages/modules/test1/resultado/resultado.module').then(m => m.ResultadoPageModule)
      },
      {
        path: 'pregunta1',
        loadChildren: () => import('./pages/modules/test2/pregunta1/pregunta1.module').then( m => m.Pregunta1PageModule)
      },
      {
        path: 'pregunta2',
        loadChildren: () => import('./pages/modules/test2/pregunta2/pregunta2.module').then( m => m.Pregunta2PageModule)
      },
      {
        path: 'pregunta3',
        loadChildren: () => import('./pages/modules/test2/pregunta3/pregunta3.module').then( m => m.Pregunta3PageModule)
      },
      {
        path: 'inicio',
        loadChildren: () => import('./pages/modules/test2/inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: 'result',
        loadChildren: () => import('./pages/modules/test2/result/result.module').then( m => m.ResultPageModule)
      },
      {
        path: 'pregunta4',
        loadChildren: () => import('./pages/modules/test2/pregunta4/pregunta4.module').then( m => m.Pregunta4PageModule)
      },
    ]
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
