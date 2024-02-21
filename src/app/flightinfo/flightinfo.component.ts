import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { FlightService } from '../flight.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flightinfo',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './flightinfo.component.html',
  styleUrl: './flightinfo.component.css'
})

export class FlightinfoComponent {
  constructor(private flightService:FlightService){};

  successFulResponse : boolean = false;

  onSubmit(f: NgForm) {
    console.log("hellooodNKKKKKKK")
    console.log(f.value);
  
    
    this.flightService.submitFlightDetails(f.value).then((value:boolean)=>{this.successFulResponse = value});
    f.reset();
  }

}
