import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent  implements OnInit {
  email: string = '';
  password: string = '';
  
  constructor(private afAuth: AngularFireAuth, 
    private toastController: ToastController,
    private router: Router) { }

  ngOnInit() {}

  criaUsuario(email: string, senha: string) {
    this.afAuth.createUserWithEmailAndPassword(email, senha)
      .then(res => {
        this.showToast('CADASTRADO COM SUCESSO');
        this.router.navigate(['/home']);
      })
      .catch(erro => {
        this.showToast('FALHA NO CADASTRO');
      });
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }
}