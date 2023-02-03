import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  userForm!: FormGroup;

  @Input() user!: User;

  @Input() newUser!: User;

  @Input() isLogin!: boolean;

  @Output() login = new EventEmitter<User>();

  @Output() signup = new EventEmitter<User>();

  constructor() { }

ngOnInit(): void {
  this.buildForm();
}
private buildForm(){
  this.userForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
} 

  logIn(){
    this.userForm.value.username = this.userForm.value.username,
    this.userForm.value.password = this.userForm.value.password   
    this.user = this.userForm.value
    
    this.login.emit(this.user)
  }

  signUp(){
    this.userForm.value.username = this.userForm.value.username,
    this.userForm.value.password = this.userForm.value.password   
    this.user = this.userForm.value
    
    this.signup.emit(this.user)
  }
}
