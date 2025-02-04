import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TablaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  numero: number = 1;
  tabla: string[] = [];

  generarTabla() {
    if (isNaN(this.numero)) {
      this.tabla = ["Ingrese un número válido"];
      return;
    }

    this.tabla = [];
    for (let i = 1; i <= 13; i++) {
      this.tabla.push(`${this.numero} × ${i} = ${this.numero * i}`);
    }
  }
}
