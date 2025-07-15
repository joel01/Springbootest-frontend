import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  response: string = '';

  constructor(private apiService: ApiService) {}

  sendMessage() {
    const payload = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    this.apiService.sendContactMessage(payload).subscribe({
      next: (res) => {
        this.response = res;
        this.name = '';
        this.email = '';
        this.message = '';
      },
      error: (err) => {
        this.response = 'Error al enviar el mensaje.';
        console.error(err);
      }
    });
  }
}
