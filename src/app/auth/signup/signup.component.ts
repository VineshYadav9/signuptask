import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/core/api/http-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers : [HttpService]
})
export class SignupComponent implements OnInit {

  signUpFrom : FormGroup;
  submitted =false;
  constructor(private formBuilder : FormBuilder, private httpService : HttpService) { }

  ngOnInit(): void {

    this.signUpFrom = this.formBuilder.group({
      fullName : '',
      email:['', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
      username : ['', [Validators.required , Validators.pattern("^[a-zA-Z][a-zA-Z\\s]+$")]],
      password: "",
      profileImg :""
    })
  }

  signUp(){
    this.submitted = true;
    if( this.signUpFrom.invalid){
      return;
    }
    let signUpUrl = "http://3.0.102.61:3002/api/v2/user/userSignUp";
    let formData = this.signUpFrom.value;
    formData["devices"] = [];
    this.httpService.post(signUpUrl,formData ).then(res=>{

    }),
    err =>{
      
    };
  }

  get f(){
     return this.signUpFrom.controls;
  }

}
