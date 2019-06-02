
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  title = 'THE TREE';
userlogin={};
   
  constructor(private router: Router,private route: ActivatedRoute,private signupapi:UserService){}
    ngOnInit(){}
    postsignup(userlogin)
    {
    this.signupapi.postuser(userlogin);
     }
}