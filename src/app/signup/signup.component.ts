import { Component } from '@angular/core';
import { FormsModule,  NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private router: Router,private authService:AuthService){};
  onSubmit(f: NgForm) {
    
    console.log("hiiiiiiworlslddd")
    console.log(f.value);
    this.authService.signup(f.value.email,f.value.password)
    this.router.navigate(['/flightinfo'])
  }

}
