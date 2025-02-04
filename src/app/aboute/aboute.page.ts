import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-aboute',
  templateUrl: './aboute.page.html',
  styleUrls: ['./aboute.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AboutePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
