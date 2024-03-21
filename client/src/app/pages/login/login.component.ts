import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { emailValidator } from './email-validator';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

    // reactive form for login!
    loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, emailValidator()]),
      password: new FormControl('', [Validators.required]),
    });

    constructor(private auth: AuthService, private router: Router) {}
 

    ngOnInit(): void { //! guard if user i login already!
      if (this.auth.isLoggedIn()) {
        this.router.navigate(['home']);
      }
    }


    onSubmit(): void {
      //console.log('test aut: ', this.loginForm.value);

      // if (this.loginForm.invalid) {
      //   return;
      // }

      
      if (this.loginForm.valid) {
        this.auth.login(this.loginForm.value).subscribe(
          (result) => {
            console.log(result);
            
            // TODO:
            //this.userService.login(); -- logic to implement
            this.router.navigate(['/home']);
          },
          // (err: Error) => {
          //   alert(err.message);
          // }
        );
      }
    }
}
