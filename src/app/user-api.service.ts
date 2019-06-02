import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
@Injectable()
export class UserService{

constructor(private http:HttpClient){}
loggedIn:Boolean;
postuser(user){
 this.http.post('http://localhost:54440/api/user',user).subscribe(res=>{
     console.log(res)
 });
} 
getuser(){
  return this.http.get('http://localhost:54440/api/user');
   } 
  
}