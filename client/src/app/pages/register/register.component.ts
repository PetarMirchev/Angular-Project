import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NgFor, NgIf, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  constructor(
    private auth: AuthService, 
    private router: Router, 
    private fb: FormBuilder
  ) {}


  registerForm = this.fb.group({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    repeatPassword: new FormControl('', [Validators.required]),
  }, { validator: this.comparePasswords });


  comparePasswords(control: FormGroup): { passwordsDontMatch: boolean  } | null {
    const password = control?.get('password')?.value;
    const repeatPassword = control?.get('repeatPassword')?.value;

    if (password !== repeatPassword) {
      return { passwordsDontMatch: true };
    }

    return null;
  }



  ngOnInit(): void { //! guard if user i login already!
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['home']);
    }
  }


  onSubmit(): void {//! user is make registration!
    // TODO -- logic for register user & redirect

    if (this.registerForm.valid) {
      this.auth.login(this.registerForm.value).subscribe(
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
