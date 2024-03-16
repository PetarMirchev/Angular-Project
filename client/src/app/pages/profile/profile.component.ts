import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(private auth: AuthService, private router: Router) {}


  ngOnInit(): void { //! guard if user is not login! (no access)
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['home']);
    }
  }

  
}
