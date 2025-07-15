import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ContactMessage } from '../../models/contact-message.model'; // Si no tienes el modelo, ahora te lo paso

@Component({
  selector: 'app-messages',
  imports: [],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent implements OnInit {
  messages: ContactMessage[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getMessages().subscribe(
      (data) => {
        this.messages = data;
      },
      (error) => {
        console.error('Error al obtener mensajes', error);
      }
    );
  }
}
