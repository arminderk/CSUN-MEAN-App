import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  //inject when using service in component *
  constructor(private validateService: ValidateService, private flash: FlashMessagesService, private authServ: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit() {

    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }
    if (!this.validateService.validateRegister(user)) {
      this.flash.show('fill in fields', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }
    if (!this.validateService.validateEmail(user.email)) {
      this.flash.show('use valid email', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    this.authServ.registerUser(user).subscribe(data => {
      if (data.success) {
        this.flash.show('you have now registered and can login', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
      } else {
        this.flash.show('Error, something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/register']);
      }
    });


  }

}
