import{ Component , OnInit}from '@angular/core';
import{ Router } from '@angular/router';

@Component({
    selector:'app-login',
    templateUrl:'../views/login.component.html',
    styleUrls:['../views/login.css']
})
 export class LoginComponent implements OnInit {

constructor(private router:Router){

}
ngOnInit(){

}

loginUser(e){
    e.preventDefault();
    console.log(e);
var username = e.target.elements[0].value;
var password = e.target.elements[1].value;
 if(username == 'admin' && password == 'admin'){
     this.router.navigate(['container']);

}
// console.log(username , password);
// return false;
}
}