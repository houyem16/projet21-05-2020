import { Component, OnInit } from '@angular/core';
import {Projet} from '../../classes/projet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  derniers_projets: Projet[] = [];

  constructor() { }

  ngOnInit() {
    this.derniers_projets = [
      {
        id_projet: 1, categorie: {id_categorie: 1, nom_categorie: 'association'},
        budget_prevu: 3000, date_fin_prevu: '30/11/2021', description: 'ceci est un projet',
        porteur_projet: {email: 'a@a.com', id_utilisateur: 1, nom: 'test', prenom: 'test 2'}, resume: 'resumee', somme_collectee: 200,
        somme_min: 1000, titre_projet: '9offet romdhan', image_url: 'https://www.cha9a9a.tn/media/cache/cha9a9a_pic/uploads/images/a47b1a71dc353e90bc4dc6fafcfece8a04237b19.png'
      },
      {
        id_projet: 1, categorie: {id_categorie: 1, nom_categorie: 'association'},
        budget_prevu: 3000, date_fin_prevu: '30/11/2021', description: 'ceci est un projet',
        porteur_projet: {email: 'a@a.com', id_utilisateur: 1, nom: 'test', prenom: 'test 2'}, resume: 'resumee', somme_collectee: 200,
        somme_min: 1000, titre_projet: 'قفّة لكلّ يتيم في هذا الشهر الكريم', image_url: 'https://www.cha9a9a.tn/media/cache/cha9a9a_pic/uploads/images/d65cf2cc0293e20d29ea1ec8f0b6f6a698335979.jpeg'
      }
      ,{
        id_projet: 1, categorie: {id_categorie: 1, nom_categorie: 'association'},
        budget_prevu: 3000, date_fin_prevu: '30/11/2021', description: 'ceci est un projet',
        porteur_projet: {email: 'a@a.com', id_utilisateur: 1, nom: 'test', prenom: 'test 2'}, resume: 'resumee', somme_collectee: 200,
        somme_min: 1000, titre_projet: '3 ROBOTS UV-C \'\'FELLAG\'\' COVID-19 POUR NOS CHU', image_url: 'https://www.cha9a9a.tn/media/cache/cha9a9a_pic/uploads/images/e046b0e3600bff8689845e1a4f1507993a416bee.jpeg'
      }
    ];
  }

}
