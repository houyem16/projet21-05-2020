import { Component, OnInit } from '@angular/core';
import {Projet} from '../../classes/projet';
import {ProjetService} from '../../providers/projet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  derniers_projets: Projet[] = [];

  constructor(private projetserv: ProjetService) { }

  ngOnInit() {
    this.projetserv.get_all_projets().subscribe(
        (res) => {
          this.derniers_projets = res;
        }
    );
  }

}
