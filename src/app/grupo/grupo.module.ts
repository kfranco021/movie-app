import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrupoComponent } from './grupo.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [GrupoComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,    
    RouterLink
  ]
})
export class GrupoModule { }
