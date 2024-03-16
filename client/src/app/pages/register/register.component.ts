import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) {}


  ngOnInit(): void { //! guard if user i login already!
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['home']);
    }
  }


  onSubmit(): void {//! user is make registration!
    // TODO -- logic for register user & redirect
  }

}
