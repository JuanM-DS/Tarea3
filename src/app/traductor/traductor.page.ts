import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {numeroALetras} from './NumeroALetras'

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.page.html',
  styleUrls: ['./traductor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TraductorPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  numero: number = 0;
  resultado: string = "";

  convertir() {
    this.resultado = numeroALetras(this.numero);
  }
}
