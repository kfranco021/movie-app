import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistroComponent } from './registro.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  
  ],
  declarations:[
    RegistroComponent
  ]
})
export class RegistroModule { }
