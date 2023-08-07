import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  historics: any[] = [
    {
      id: 1,
      title: "Paiements",
      quantity: 12,
      icon: "payment"
    },
    {
      id: 2,
      title: "Locataires",
      quantity: 22,
      icon: "agents"
    },
    {
      id: 3,
      title: "Immeubles",
      quantity: 2,
      icon: "building"
    },
    {
      id: 4,
      title: "Documents",
      quantity: 42,
      icon:"doc"
    }
  ]
}
