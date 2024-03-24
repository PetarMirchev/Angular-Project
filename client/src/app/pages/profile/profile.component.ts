import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {


  token: string | null = null;
  userProfileData: any = {}; // Placeholder for profile data

  constructor(private auth: AuthService, private router: Router) {}


  ngOnInit(): void { //! guard if user is not login! (no access)
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['home']);
    } else {
        this.token = localStorage.getItem('token');
        // (Optional) Check if token exists before proceeding
        if (this.token) {
          this.userProfileData =  JSON.parse(this.token);
          //console.log(this.userProfileData);
          
        } else {
          console.log('No token found in localStorage.');
          // Handle the case where no token is present (e.g., redirect to login)
          this.router.navigate(['login']);
        }
    }

  }

}



