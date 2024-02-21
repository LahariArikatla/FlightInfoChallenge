import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { Router } from "@angular/router";
import { provideAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) { 

  }
  app = initializeApp(environment.firebaseConfig);
  auth = getAuth(this.app);
  private authSecretKey = 'Bearer Token';

  //Authentication Validation for Sign Up
  signup(email:string,password:string){
    console.log("email:"+email+"password:"+password)
    createUserWithEmailAndPassword(this.auth, email, password)
    .then((userCredential) => {
    // Signed up 
      const user = userCredential.user;
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
  })
};
  
  //Authentication validation for Login
  login(email:string,password:string){
    console.log("email:"+email+"password:"+password)
    signInWithEmailAndPassword(this.auth, email, password)
    .then((userCredential) => {
    // Signed in 
      const user = userCredential.user;
      const authToken = 'DUMMY_TOKEN'; // Generate or receive the token from your server
      localStorage.setItem(this.authSecretKey, authToken);
      this.router.navigate(['/flightinfo'])


    // ...
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    });

  }
  isAuthenticatedUser(): boolean {
    
    const token = localStorage.getItem(this.authSecretKey);

    if(token){
      console.log("TRUE")
      return true
    }

    else{
      return false
    }
  }

  
    
}
  

