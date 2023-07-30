import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {
  loginForm!: FormGroup;

  isSubmitting!: boolean;

  hide = true;

  constructor(private formBuilder: FormBuilder, private router: Router){}

  ngOnInit(): void{
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(13)]]
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

    
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    // Vérification du domaine de l'e-mail
    if (!email.endsWith('@myiuc.com')) {
      alert('Veuillez utiliser une adresse e-mail de type @myiuc.com');
      this.isSubmitting = false;
      return;
    }

    // Simule une action asynchrone (par exemple, une requête HTTP)
    setTimeout(() => {
      this.isSubmitting = false;
    }, 2000);
  }
}
