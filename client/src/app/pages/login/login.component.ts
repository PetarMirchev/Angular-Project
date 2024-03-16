import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

    // reactive form for login!
    loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });

    constructor(private auth: AuthService, private router: Router) {}
 

    ngOnInit(): void {
      if (this.auth.isLoggedIn()) {
        this.router.navigate(['profile']);
      }
    }


    onSubmit(): void {
      //console.log('test aut: ', this.loginForm.value);
      
      if (this.loginForm.valid) {
        this.auth.login(this.loginForm.value).subscribe(
          (result) => {
            console.log(result);
            
            this.router.navigate(['/home']);
          },
          (err: Error) => {
            alert(err.message);
          }
        );
      }
    }
}
