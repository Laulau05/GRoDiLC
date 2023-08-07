import { Component } from '@angular/core';

@Component({
  selector: 'app-locataires',
  templateUrl: './locataires.component.html',
  styles: [
  ]
})
export class LocatairesComponent {
  locataires: any[] = [
    {
      image: '',
      firstname: 'Feupouo',
      lastname: 'Laureen',
      num_appartement: 4
    },
    {
      image: '',
      firstname: 'Tchuenwouo',
      lastname: 'Rosalie',
      poste: 'Prof. Developpement web'
    },
    {
      image: '',
      firstname: 'Ouoham',
      lastname: 'Diane',
      poste: 'CEO'
    },
    {
      image: '',
      firstname: 'Simo',
      lastname: 'Christine',
      poste: "Infirmiere "
    },
    {
      image: '',
      firstname: 'Noumbissie',
      lastname: 'Guy-Bertrand',
      poste: 'Comptable generale'
    },
    {
      image: '',
      firstname: 'Simeu',
      lastname: 'Laura',
      poste: 'Avocate'
    },
    {
      image: '',
      firstname: 'Noumbissie',
      lastname: 'Melanie',
      poste: 'Prof. Francais/Anglais'
    },
    {
      image: '',
      firstname: 'Kamguia',
      lastname: 'David-Erwan',
      poste: 'Prof. Genie Logiciel'
    },
    {
      image: '',
      firstname: 'Nghomsi',
      lastname: 'Vaik-Yohan',
      poste: 'Prof. Maintenance informatique'
    },
    {
      image: '',
      firstname: 'Njuimo',
      lastname: 'Carnegie',
      poste: 'Cardiologue'
    },
    {
      image: '',
      firstname: 'Pouani',
      lastname: 'David',
      poste: 'Scrum Master'
    },
    {
      image: '',
      firstname: 'Yimga',
      lastname: 'Ericka',
      poste: 'DevOpps'
    },
  ]
}
