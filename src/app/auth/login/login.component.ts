import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/api/http-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [HttpService]
})
export class LoginComponent implements OnInit {

  loginFrom: FormGroup;
  submitted = false;
  returnUrl :string;
  constructor(private formBuilder: FormBuilder, private httpService: HttpService, private router : Router,
    private route : ActivatedRoute) {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'dashboard';
    
    let userinfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
    if(userinfo.token){
      this.router.navigate(['dashboard']);
    }
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'dashboard';
    let userinfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
    if(userinfo.token){
      this.router.navigate(['dashboard']);
    }
    this.loginFrom = this.formBuilder.group({
      password: "",
      username: ""
    })
  }

  login() {
    this.submitted = true;
    if (this.loginFrom.invalid) {
      return;
    }
    let signUpUrl = "http://3.0.102.61:3002/api/v2/user/userLogin";
    this.httpService.post(signUpUrl, this.loginFrom.value).then(res=>{
      if(res.code ==200){
        localStorage.setItem("userInfo",JSON.stringify(res.result));
        this.router.navigate(['dashboard']);
      }
    }),
    err =>{
      
    };
  }
}
