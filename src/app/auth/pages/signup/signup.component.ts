import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user';
import {MessageService} from 'primeng-lts/api';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User ={
    username: '',
    password: ''
  }

  constructor(private authService   : AuthService,
              private router        : Router,
              private messageService: MessageService) { }

  ngOnInit(): void {
  }

  signup(user:User){

    this.authService.signup(user)
    .subscribe(()=>{
      this.messageService.add({
        key     : 'tsm',
        severity: 'success',
        summary : 'Success!',
        detail  :'user successfully registered'
      })
      setTimeout(()=>{
        this.router.navigate(['auth/login'])
      },3800)

    }, ({error})=>{
      const {errors} = error
      for (let index = 0; index < errors.length; index++) {
        const error = errors[index];
        this.messageService.add({
          key     : 'tsm',
          severity: 'error',
          summary : 'Error!',
          detail  :error.msg
        })
      }
    })
  }
}
