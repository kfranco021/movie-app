import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { HomePageModule } from './home/home.module';
import { GrupoComponent } from './grupo/grupo.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'grupo',
    component: GrupoComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    HomePageModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }