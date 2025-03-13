import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service'; // Importa el servicio
import { 
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonDatetime, IonGrid, 
  IonRow, IonCol, IonDatetimeButton, IonModal
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';  // Importa FormsModule


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [
    CommonModule,
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonGrid,
    IonRow,
    IonCol,
    FormsModule, 
    IonDatetime
  ]
})
export class Tab2Page {
  dias = [
    { nombre: 'L', seleccionado: false },
    { nombre: 'M', seleccionado: false },
    { nombre: 'M', seleccionado: false },
    { nombre: 'J', seleccionado: false },
    { nombre: 'V', seleccionado: false },
    { nombre: 'S', seleccionado: false },
    { nombre: 'D', seleccionado: false }
  ];

  abrir: string = ''; // Hora de apertura
  cerrar: string = ''; // Hora de cierre

  constructor(private navCtrl: NavController, private authService: AuthService) {}

  // Función para manejar la selección de los días
  toggleDia(index: number) {
    this.dias[index].seleccionado = !this.dias[index].seleccionado;
  }

  guardarSeleccion() {
    // Filtramos los días seleccionados
    const diasSeleccionados = this.dias.filter(dia => dia.seleccionado).map(dia => dia.nombre);
    
    // Validamos que haya una hora de apertura, cierre y días seleccionados
    if (this.abrir && this.cerrar && diasSeleccionados.length > 0) {
      console.log('Datos antes de enviar:', this.abrir, this.cerrar, diasSeleccionados); // Asegúrate de que los datos estén bien
  
      // Enviar los datos al backend a través del servicio
      this.authService.programarRiego(this.abrir, this.cerrar, diasSeleccionados).subscribe(
        (response) => {
          // Si la llamada fue exitosa, mostramos un mensaje o redirigimos
          console.log('Riego programado exitosamente:', response);
          this.navCtrl.navigateForward('/tabs/tab3');  // Redirige a otra página si lo deseas
        },
        (error) => {
          // Si ocurrió un error, mostramos un mensaje
          console.error('Error al programar el riego:', error);
        }
      );
    } else {
      console.log('Por favor, complete todos los campos.');
    }
  }
}