import { AfterViewInit, Component, ElementRef, NgZone, ViewChild } from '@angular/core';

import { StripeService } from 'src/app/stripe.service';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.css']
})
export class CreatetaskComponent implements AfterViewInit {

  @ViewChild('cardInfo') cardInfo: ElementRef;
  cardError: string;
  card: any;

  constructor(
    private ngZone: NgZone,
    private stripeService: StripeService
    
    ){}

    

  //creacion de la tarjeta
  ngAfterViewInit(){
    this.card = elements.create('card');
    this.card.mount(this.cardInfo.nativeElement);
    this.card.addEventListener('change', this.onChange.bind(this));
  }


  //msm error en tiempo real
  onChange({ error } : {error : any}){
    if (error) {
      this.ngZone.run(() => this.cardError = error.message)
    } else {
      this.ngZone.run(() => this.cardError = null as any);
    }
  }


 
  async onClick() {
    const { token, error } = await stripe.createToken(this.card);
    if (token) {
      const response = await this.stripeService.charge(100, token.id);
      console.log(response);
      alert('Successful purchase!');
    }else {
      this.ngZone.run(() => this.cardError = error.message)
      
    }
  }
}
