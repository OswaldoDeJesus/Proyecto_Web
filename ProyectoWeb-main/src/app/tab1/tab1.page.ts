import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonGrid, IonRow, IonCol]
})
export class Tab1Page {
  aspersores = [
    { nombre: 'Aspersor 1', humedad: 60, abrir: '07:00', cerrar: '07:30', dias: ['L', 'M', 'V'], encendido: false }
  ];

  constructor(private userService: UsersService) {}

  toggleAspersor(index: number) {
    this.aspersores[index].encendido = !this.aspersores[index].encendido;
  }
}
