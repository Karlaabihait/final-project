import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {
  comprar:any;
  hide:boolean = true;

  
  constructor(private _authservice: AuthService, private _router:Router) { 
    this.comprar ={}
  }

  ngOnInit(): void {}}