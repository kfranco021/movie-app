import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  autenticado : boolean = false;
  constructor(private afAuth: AngularFireAuth, public router: Router) {}

  ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.autenticado = true;
      } else {
        this.autenticado = false;
      }
    });
  }

  async deslogar() {
    await this.afAuth.signOut();
    this.autenticado = false;
    setTimeout(() => 
      this.router.navigate(['/login'])
      , 500)    
  }
}
