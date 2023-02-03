import { Component, OnInit} from '@angular/core';
import { User } from '../../shared/models/user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {MessageService} from 'primeng-lts/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogin:boolean = true;
  
  user: User ={
    username: '',
    password: ''
  }

  constructor(private authService   : AuthService,
              private router        : Router,
              private messageService: MessageService
              ) { }

  ngOnInit(): void {
    
  }

  login(user:User){

    this.authService.login(user)
    .subscribe(()=>{
      
      this.router.navigate(['articulos/list'])

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
