import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { 
  IonContent,
  IonButton, 
  IonCard, 
  IonInput, 
  IonItem, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonLabel, 
  IonCardContent, 
  IonCardHeader, 
  IonCardTitle 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonCardTitle, IonItem, IonInput, IonCard, IonButton, 
    IonContent, CommonModule, FormsModule, RouterModule, 
    IonHeader, IonToolbar, IonTitle, IonLabel, IonCardContent, 
    IonCardHeader
  ]
})
export class LoginPage implements OnInit {
  usuarioCredes = {
    usuario: '',
    password: ''
  };

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {}

  mostrar() {
    this.http.post<any>('http://localhost:5000/logueo', {
      user: this.usuarioCredes.usuario,
      pass: this.usuarioCredes.password
    }).subscribe(response => {
      if (response.Acreditado) {
        this.router.navigate(['tabs/tab3']);
      } else {
        alert(response.mensaje);
      }
    }, error => {
      console.error('Error en la autenticación:', error);
      alert('Error en el servidor. Intenta nuevamente.');
    });
  }
}
