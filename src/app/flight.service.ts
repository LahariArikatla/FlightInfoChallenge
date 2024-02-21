import { Injectable } from '@angular/core';
import { FlightinfoComponent } from './flightinfo/flightinfo.component';
import { FlightInfoPayload } from './flightInfoPayload';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor() { };



  async submitFlightDetails(flightdata: FlightInfoPayload): Promise<boolean>{

    let response_var = false;
    console.log("Flight Detaiils"+ JSON.stringify(flightdata));
    async function postData(url = "", data = {}) {
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          "token": "WW91IG11c3QgYmUgdGhlIGN1cmlvdXMgdHlwZS4gIEJyaW5nIHRoaXMgdXAgYXQgdGhlIGludGVydmlldyBmb3IgYm9udXMgcG9pbnRzICEh",
          "candidate": "Lahari Arikatla"
        
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
     });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  await postData("https://us-central1-crm-sdk.cloudfunctions.net/flightInfoChallenge", flightdata).then((data) => {
  console.log("data" + data);
  response_var = data;
  return data;
  });
  console.log("Lahari Madhusudhan")
  return response_var;
  }
}
