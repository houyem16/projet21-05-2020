import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from '../classes/client';
import { UtilisateurService } from '../providers/utilisateur.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.scss']
})

export class RegisterPageComponent {
    @ViewChild('f', {static: false}) registerForm: NgForm;
    nuser: Client = new Client();

    constructor(private router: Router, private userserv: UtilisateurService) {

    }

    //  On submit click, reset field value
    onSubmit() {
        this.registerForm.reset();
    }

    doregister() {
        //console.log(this.nuser);
        this.userserv.register(this.nuser).subscribe(
            (res) => {
                if (res.status === true) {
                    alert('compte cree avec success');
                    this.router.navigate(['/crowd/login']);
                } else {
                    alert('echec inscription');
                }
            }
        );
        }    

}
