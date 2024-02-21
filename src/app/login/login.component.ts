import { Component } from '@angular/core';
import { FormsModule,  NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  constructor(private router: Router,private authService:AuthService){};
  
  onSubmit(f: NgForm) {
    
    console.log("hellooodNKKKKKKK")
    console.log(f.value);
    this.authService.login(f.value.email,f.value.password)
    this.router.navigate(['/flightinfo'])
    
    
  }
  
}
