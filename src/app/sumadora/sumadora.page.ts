import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-sumadora',
  templateUrl: './sumadora.page.html',
  styleUrls: ['./sumadora.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SumadoraPage implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

  sumar(){
    this.resultado = this.num1 + this.num2;
  }

}
