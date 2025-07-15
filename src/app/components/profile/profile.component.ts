import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  profile: any; // propiedad para guardar los datos

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getProfile().subscribe(data => {
      this.profile = data;
    });
  }
}
