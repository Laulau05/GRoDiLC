import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styles: [
  ]
})
export class PageHeaderComponent implements OnInit{

  @Input() page_title: string = "Tableau de board analytique"
  @Input() sub_title: string = ""

  ngOnInit(): void {
  }

}
