import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FlightinfoComponent } from './flightinfo/flightinfo.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    {
        path:"",
        component:LoginComponent

    },
    {
        path:"signup",
        component:SignupComponent

    },
    {
        path:"flightinfo",
        component:FlightinfoComponent,
        canActivate:[AuthGuard]
    }
];
