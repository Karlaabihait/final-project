import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupUser:any;
  hide:boolean = true;

  constructor(private _authservice: AuthService, private _router:Router) { 
    this.signupUser ={}
  }

ngOnInit(): void {
}
signUp(){

if (!this.signupUser.name||!this.signupUser.email || !this.signupUser.password || !this.signupUser.confirmpassword) {

alert('Datos Incompletos')

} else {
this._authservice.signUpUser(this.signupUser).subscribe({
  next:(v) => {
    localStorage.setItem("token", v.jwtToken)
  this._router.navigate(['/home2'])
  },
  error:(e) => {
    alert(e.error)
  }
})
}

}
}
