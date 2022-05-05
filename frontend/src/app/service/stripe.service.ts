import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StripeService {

  constructor(private http: HttpClient) { }

  charge(amount:any, tokenId:any){
    return this.http.post('http://localhost:3003/stripe_checkout', {
      stripeToken: tokenId,
      amount: amount
    }).toPromise();
  }
}
