import { Component } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styles: [
  ]
})
export class DocumentsComponent {
  documents: any[] = [
    {
      code: "134",
      name: "nom du fichier",
      description: "description du fichier",
      evaluation: {
        name: "evaluation n12",
      },
      created_at: "12/12/2020",
      updated_at: "12/12/2020",
      Taille: "2.5 Mo",
    },
    {
      code: "234",
      name: "nom du fichier",
      description: "description du fichier",
      evaluation: {
        name: "evaluation n12",
      },
      created_at: "01/12/2021",
      updated_at: "01/12/2021",
      Taille: "1 Mo",
    },
    {
      code: "203",
      name: "nom du fichier",
      description: "description du fichier",
      evaluation: {
        name: "evaluation n12",
      },
      created_at: "01/12/2021",
      updated_at: "01/12/2021",
      Taille: "1.6 Mo",
    },
    {
      code: "103",
      name: "nom du fichier",
      description: "description du fichier",
      evaluation: {
        name: "evaluation n12",
      },
      created_at: "01/12/2021",
      updated_at: "01/12/2021",
      Taille: "1.6 Mo",
    }
  ]
}
