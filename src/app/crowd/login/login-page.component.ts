import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {UtilisateurService} from '../providers/utilisateur.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent {

    @ViewChild('f', {static: false}) loginForm: NgForm;
    credentials: {
      email: string,
      pwd: string
    };

    constructor(private router: Router,
        private route: ActivatedRoute, private userserv: UtilisateurService) {
        this.credentials = {email: '', pwd: ''};
    }

        dologin() {
          this.userserv.login(this.credentials).subscribe(
              (res) => {
                  if (res.status === true) {
                      this.userserv.set_email(this.credentials.email);
                      this.router.navigate(['/crowd/front']);
                  } else {
                      alert(res.msg);
                  }
              }
          );
        }

    // On submit button click
    onSubmit() {
        this.loginForm.reset();
    }
    // On Forgot password link click
    onForgotPassword() {
        this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
    }
    // On registration link click
    onRegister() {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    }
}
