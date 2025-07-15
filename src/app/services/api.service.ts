import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define la interfaz para el perfil
export interface Profile {
  name: string;
  profession: string;
  skills: string[];
  contact: string;
}

// Define la interfaz para el mensaje de contacto
export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8081/api'; // Cambia el puerto si tu backend usa otro

  constructor(private http: HttpClient) { }

  // Obtener el perfil
  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(`${this.apiUrl}/profile`);
  }

  // Enviar un mensaje de contacto
  sendContactMessage(message: ContactMessage): Observable<string> {
    return this.http.post(`${this.apiUrl}/contact`, message, { responseType: 'text' });
  }

  // Obtener todos los mensajes
  getMessages(): Observable<ContactMessage[]> {
    return this.http.get<ContactMessage[]>(`${this.apiUrl}/messages`);
  }
}

