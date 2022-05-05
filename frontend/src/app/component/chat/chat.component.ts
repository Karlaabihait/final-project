import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  nuevoMensaje: string = '';
  mensajes: any = [
    {
      emisor: 'bot',
      texto: 'Hi!',
    },
  ];

  possibleAnswers = [
    'To register at the top right click on Sign Up',
    'Once registered you can buy the currency of your choice',
  
  ];

  isClosed: boolean = true;

  constructor() {}

  ngOnInit(): void {}
  enviarMensaje() {
    this.mensajes.push({
      emisor: 'id',
      texto: this.nuevoMensaje,
    });

    if (this.mensajes.length < 3) {
      setTimeout(() => {
        this.mensajes.push({
          emisor: 'bot',
          texto: this.possibleAnswers[0],
        });
      }, 450);
    } else if (this.mensajes.length < 5) {
      setTimeout(() => {
        this.mensajes.push({
          emisor: 'bot',
          texto: this.possibleAnswers[1],
        });
      }, 450);
    } else if (this.mensajes.length < 7) {
      setTimeout(() => {
        this.mensajes.push({
          emisor: 'bot',
          texto: this.possibleAnswers[2],
        });
      }, 450);
    } else {
      setTimeout(() => {
        this.mensajes.push({
          emisor: 'bot',
          texto: this.possibleAnswers[3],
        });
      }, 450);
    }

    this.nuevoMensaje = '';
  }
  open() {
    this.isClosed = false;
  }

  close() {
    this.isClosed = true;
  }
}