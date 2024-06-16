import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { HomePageModule } from './home/home.module';
import { GrupoComponent } from './grupo/grupo.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AuthGuard } from './services/auth-guard.service';
import { GrupoModule } from './grupo/grupo.module';
import { LoginModule } from './login/login.module';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomePage,
    //canActivate: [AuthGuard]
  },
  {
    path: 'grupo',
    component: GrupoComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'registro',
    component: RegistroComponent,
    //canActivate: [AuthGuard]
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    HomePageModule,
    GrupoModule,
    LoginModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }