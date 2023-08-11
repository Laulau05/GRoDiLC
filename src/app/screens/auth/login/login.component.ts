import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

class User {
  email!: string;
  password!: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  isSubmitting!: boolean;

  hide = true;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router){}

  ngOnInit(): void{
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  get email(){
    if(this.loginForm.get('email')?.hasError('required')){
      return 'Champ obligatoire';
    }
    return this.loginForm.get('email') ? 'Invalid adresse email' : '';
  }

  get password(){
    if(this.loginForm.get('password')?.hasError('required')){
      return 'Champ obligatoire';
    }
    return this.loginForm.get('password') ? 'Invalid mot de passe' : '';
  }
  

  onSubmit(){
    if(this.loginForm.invalid){
      return;
    }

    this.isSubmitting = true;

    const user: User = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    this.authService.login(user).subscribe(
      (res: User | any) => {
        this.authService.setToken(res.data);
        this.isSubmitting = false;
        this.router.navigate(['/admin']);
      },
      (err: any) => {
        console.log(err);
      }
    )
  }
}
