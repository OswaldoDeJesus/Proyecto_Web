import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common'; // Importamos CommonModule para usar *ngIf
import { NavController } from '@ionic/angular'; // Importamos NavController
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButton]
})

export class Tab3Page {
  aspersores = [
    { nombre: 'Aspersor 1', humedad: '60', temperatura: '25°C', encendido: false },
  ];
  
  selectedIndex: number | null = 0; // Ahora permitimos valores null

  constructor(private navCtrl: NavController, private user:UsersService) {} // Inyectamos NavController
  data={
    user:"Jorge",
    pass:"12345"
  }
  ngOnInit(){
    this.user.auth(this.data).subscribe((res:any)=>{
      console.log(res);
    })
  }
  /** Selecciona un aspersor */
  selectAspersor(index: number) {
    this.selectedIndex = index;
  }

  /* agregarAspersor() {
    this.aspersores.push({
      nombre: "", // Se asignará después
      humedad: "", // Convertir a string
      temperatura: "", // Convertir a string
      encendido: false
    });
  
    this.reordenarAspersores(); // Se renumeran los nombres
  }
  
  
  eliminarAspersor() {
    if (this.selectedIndex !== null) {
      this.aspersores.splice(this.selectedIndex, 1); // Elimina el aspersor
      this.selectedIndex = null;
      this.reordenarAspersores(); // Renumera los nombres
    }
  }
  
  reordenarAspersores() {
    this.aspersores.forEach((aspersor, index) => {
      aspersor.nombre = `Aspersor ${index + 1}`;
    });
  } */
  
  

  /** Enciende o apaga el aspersor seleccionado */
  toggleAspersor() {
    if (this.selectedIndex !== null) {
      this.aspersores[this.selectedIndex].encendido = !this.aspersores[this.selectedIndex].encendido;
    }
  }


  /** Navega a Tab 2 */
  irATab2() {
    this.navCtrl.navigateForward('/tabs/tab2');
  }
}