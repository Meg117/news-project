import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{
  title = 'THE TREE';
  
  val;
i;

  constructor(private router: Router,
    private route: ActivatedRoute, private loginapi:UserService){}
    userlogin;
    ngOnInit(){
      this.loginapi.getuser().subscribe(data=>this.userlogin=data);
    }
    login(user:HTMLInputElement,pass:HTMLInputElement){
      let flag=false;
      for(let i of this.userlogin){
        if((i.userName==user.value)&&(i.passWord==pass.value))
       
        flag=true;
         
          
         }
      
        
        if(flag==false){
          alert("enter correctly");
          }
          else{
            alert("login successful");
            this.loginapi.loggedIn=true;
            this.router.navigate(['/dashboard']);
          }
        }
    }
    

